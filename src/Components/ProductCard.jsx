import React, { useState, useRef, useContext } from 'react';
import { CartContext } from '../App';

export default function ProductCard ({
  data = {},
  addToCart = () => {},
  isAddedToCart = false,
}) {
  return (
    <div className="card">
      <div className="card-header" key={data.id}>
        <img src={data.image} alt="Product" />
      </div>
      <div className="card-body">
        <h3 className="product_name">{data.iteam}</h3>
        <p className="product_description mb-10">{data.des}</p>
        <p className="product_price mb-10">₹ {data.price}</p>
      </div>
      <div className="addCartBtn text-center">
        { <button
          type="button"
          className="btn btn-outline-dark "
          disabled={isAddedToCart}
          onClick={() => addToCart({ ...data, quantity: 1 })}
        >
          {isAddedToCart ? "Remove" : "Add To Cart"}
        </button>}
    
      </div>
    </div>
  );
}
