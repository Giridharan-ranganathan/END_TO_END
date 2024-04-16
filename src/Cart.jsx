import { useContext, useState , useEffect } from "react";
import { CartContext } from "./App";

export default function ViewCart() {
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState();
    const { cart } = useContext(CartContext);
 
  useEffect(() => {
      calculateTotal();
  }, [cart]);

// Calculate Total Amount
    let total = 0;
    const calculateTotal = () => {
      setTotalAmount(total);
        for (const item of cart) {
            total += parseInt(item.price);
        }
        return total;
    };



  // Quantity Increment Function
    const quantityInc = () => {
      let newTotal = totalAmount;
      for(const val of cart){
          newTotal += parseInt(val.price);
      }
      setTotalAmount(newTotal);
      setQuantity(quantity + 1);
  };
  
  // const quantityInc = (id) => {
  //       const updatedCart = cart.map(item => {
  //           if (item.id === id) {
  //               return { ...item, quantity: item.quantity + 1 }; // Increment quantity
  //           }
  //           return item;
  //       });
  //       setCart(updatedCart);
  //   };
 // Quantity Decrement Function
 const quantityDec = () => {
    let newTotal = totalAmount;
    for(const val of cart){
      newTotal -= parseInt(val.price);
    }
     setTotalAmount(newTotal);
     setQuantity(quantity - 1);
};  

    if (!cart) {
        return <div>No items available</div>;
    }

    return (
        <>
            <div className="cart-container">
                <h3 className="Cart-header">Cart Products</h3>
                <div className='demo mb-10'>
                    {cart && cart.length > 0 ? (
                        cart.map((val) => (
                            <div className="card" key={val.id}>
                                <div className="card-header">
                                    <img src={val.image} alt={val.iteam} />
                                </div>
                                <div className="card-body">
                                    <h3 className="product_name">{val.iteam}</h3>
                                    <p className="product_description mb-10">{val.des}</p>
                                    <p className="product_price mb-10">Price: ${val.price}</p>
                                </div>
                                <div className="cart-card-foot">
                                    <div><button type="button" className="btn btn-light" onClick={quantityDec}> - </button></div>
                                    <div><span>{quantity}</span></div>
                                    <div><button type="button" className="btn btn-light" onClick={quantityInc}> + </button></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No items available</div>
                    )}
                </div>
                <div className="total-Amount-div">
                    <h2 className="cart-product-price">Total Amount Rs: $ {totalAmount}</h2>
                </div>
            </div>
        </>
    );
}
