import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {useState} from 'react';

export default function Header({cart}) {
 
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid contOne">
   <span class="qwigley-regular">Shoe Kadai</span>
    <div class="collapse navbar-collapse homeBra" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  class="nav-link active" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Location
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Chennai</a></li>
            <li><a class="dropdown-item" href="#">Krishangiri</a></li>
            <li><hr/></li>
            <li><a class="dropdown-item" href="#">Villupuram</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className='col-lg-3'>
    <Link type="button" className="btn btn-outline-warning" to={"/Cart.jsx"}  
     ><span><i class="fa-solid fa-cart-shopping"></i></span> Cart <span > - {cart.length} </span></Link>
      </div>
  </div>
</nav>
        </>
    )
}