import { useContext, useState , useEffect } from "react";
// import { CartContext } from "./App";
import { addItemToCart , increment , decrement , updateTotal} from '../Redux/Reducer/cart';
import { useDispatch, useSelector } from 'react-redux';


export default function ViewCart() {
    const dispatcher = useDispatch();
    const { items = [] , total = 0,} =  useSelector((store) => store.cart);


// useEffect(() => {
//     fetch("http://localhost:5173/product.json")
//       .then((response) => response.json())
//       .then((result) => {
//         dispatcher(saveAllProducts(result.products));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
 

  useEffect(() => {
    if (items.length > 0) {
      let subTotal = 0;
      items.forEach((element) => {
        subTotal += element.price * element.quantity;
      });

      dispatcher(updateTotal(subTotal));
    }
  }, [items]);

    if (!items) {
        return <div>No items available</div>;
    }

    return (
        <>
            <div className="cart-container">
                <h3 className="Cart-header">Cart Products</h3>
                <div className='demo mb-10'>
                    {items && items.length > 0 ? (
                        items.map((val) => (
                            <div className="card" key={val.id}>
                                <div className="card-header">
                                    <img src={val.image} alt={val.iteam} />
                                </div>
                                <div className="card-body">
                                    <h3 className="product_name">{val.iteam}</h3>
                                    <p className="product_description mb-10">{val.des}</p>
                                    <p className="product_price mb-10">Price: ₹ {val.price}</p>
                                </div>
                                <div className="cart-card-foot">
                                    <div><button type="button" className="btn btn-light" onClick={() => dispatcher(decrement({ id: val.id, value: 1 }))}> - </button></div>
                                    <div><span>{val.quantity}</span></div>
                                    <div><button type="button" className="btn btn-light" onClick={() => dispatcher(increment({ id: val.id, value: 1 }))}> + </button></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No items available</div>
                    )}
                </div>
                <div className="total-Amount-div">
                    <h2 className="cart-product-price">Total Amount : ₹ {total}</h2>
                </div>
            </div>
        </>
    );
}
