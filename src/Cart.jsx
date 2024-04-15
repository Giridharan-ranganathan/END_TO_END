import { useContext, useEffect, useState } from "react"
import { CartContext } from "./App";

export default function ViewCart() {
    const [total,setTotal] = useState(0);
    const {cart} = useContext(CartContext);
    // useEffect(() => {
    //     setTotal(cart.reduce((acc,curVal) => {
    //         acc + parseInt(curVal),0
    //     }));
    // },[cart]);

    // const calculateTotal = () => {
    //     let total = 0;
    //     if (cart) {
    //       for (const item of cart) {
    //         total = total + item.price;
    //       }
    //     }
    //     return total;
    //   };

        const calculateTotal = () => {
            let total = 0;
            for(const iteam of cart){
                total = total+ parseInt(iteam.price);
            }
            return total ;
        }

    if (!cart) {
        return <div>No items available</div>;
      }
      return (
        <>
        <div className="cart-container">
          <h3>Cart Products</h3>
          <div className='demo mb-10'>
          {cart && cart.length > 0 ? (
              cart.map((val) => (
                <div className="card">
                <div className="card-header" key={val.id}>
                    <img src={val.image} alt={val.iteam} />
                  </div>
                  <div className="card-body">
                    <h3 className="product_name">{val.iteam}</h3>
                    <p className="product_description mb-10">{val.des}</p>
                    <p className="product_price mb-10">Price: ${val.price}</p>
                  </div>
                  </div>
              ))
            ) : (
              <div>No items available</div>
            )}
          </div>
          <div className="total-Amount-di">
          <h2 className="product_price">Total Amount Rs : $ {calculateTotal()}</h2>
          </div>
          </div>
        </>
      );
    }