import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import ViewCart from '../src/Components/Cart';
import Header from './router/Header';
import { createContext } from 'react'; 

export const CartContext = createContext(); 

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div>
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/cart.jsx' element={<ViewCart />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
