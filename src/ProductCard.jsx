import React, { useState, useRef, useContext } from 'react';
import { CartContext } from './App';

export const ProductCard = ({service }) => {
  const {cart , setCart} = useContext(CartContext);
  const textRef = useRef();
  
  if (!cart) {
    cart = [];
  }
  const addToCart = () => {
    if (textRef.current.innerText === 'Add To Cart') {
      textRef.current.innerText = 'Remove';
      addCart();
    } else if (textRef.current.innerText === 'Remove') {
      textRef.current.innerText = 'Add To Cart';
      removeCart();
    }
  };

  const addCart = () => {
    setCart([...cart, service]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== service.id));
  };

  return (
    <div className="card">
      <div className="card-header" key={service.id}>
        <img src={service.image} alt="Product" />
      </div>
      <div className="card-body">
        <h3 className="product_name">{service.iteam}</h3>
        <p className="product_description mb-10">{service.des}</p>
        <p className="product_price mb-10">₹ {service.price}</p>
      </div>
      <div className="addCartBtn text-center">
        { <button
          type="button"
          className="btn btn-outline-dark "
          onClick={addToCart}
          ref={textRef}
        >
          {/* {cart.includes(service.id) ? 'Remove' : 'Add To Cart'} */}
          { cart.find(item => item.id === service.id) ? 'Remove' : 'Add To Cart'}
        </button>}
        {/* {cart.includes(service) ? (<button
          type="button"
          className="btn btn-outline-dark"
          onClick={removeCart}
        >Remove</button>) : (<button
        type="button"
        className="btn btn-outline-dark"
        onClick={addCart}
      >Add to Cart</button>) } */}
      </div>
    </div>
  );
}
