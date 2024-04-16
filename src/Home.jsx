import { ProductCard } from './ProductCard';
import {useState} from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


export default function Home(){

const data = [
  {
  id : 1,
  iteam : "Nike Dunk Low",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e8220807-de96-471f-93cf-ab84345cbfe3/dunk-low-shoes-W544sp.png",
  price : "11895.00",
  des : "Mens Waffle NavRunning Shoe",
  // buttonMessage : "Add To Cart"
},{
  id : 2,
  iteam : "Air Jordan 1 Low SE",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7171a94-218e-4945-98cb-43715284f69c/air-jordan-1-low-se-shoes-WSkjPL.png",
  price : "10295.00",
  des : "Mens Quest 5Running Shoe",
  // buttonMessage : "Add To Cart"
},{
  id : 3,
  iteam : "Vapor Cage 4",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8f819fc-8762-4cfc-80ea-994c82c760fc/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png",
  price : "13495.00",
  des : "Tennis ShoesBoat Shoe",
  // buttonMessage : "Add To Cart"
},
{
  id : 4,
  iteam : "Nike InfinityRN 4",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a751c7f3-b3af-46b5-8368-6cfb67174b7e/infinityrn-4-road-running-shoes-mLRjcz.png",
  price : " 14995.00",
  des : "Club Fg/MgRunning Shoe",
  // buttonMessage : "Add To Cart"
},{
  id : 5,
  iteam : "Air Jordan 1 Zoom",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ad2f5045-d30a-4d23-9040-0f3a1dad80a4/air-jordan-1-zoom-cmft-2-shoes-gxvXJM.png",
  price : "13295.00",
  des : "Swift 3 Running Shoes",
  // buttonMessage : "Add To Cart"
},{
  id : 6,
  iteam : "Nike Air Max Isla",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0b4c19f5-4eef-4618-b8fc-849fb7f1ae39/air-max-isla-sandals-rrtqw5.png",
  price : " 8695.00",
  des : "Elevate IiiRunning Shoe",
  // buttonMessage : "Add To Cart"
},{
  id : 7,
  iteam : " Low '77 Vintage",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9136a14-d4af-4619-a253-2c23072ae11d/blazer-low-77-vintage-shoes-tVsDk0.png",
  price : "8695.00",
  des : " III Basketball Shoes",
  // buttonMessage : "Add To Cart"
},{
  id : 8,
  iteam : "Nike Jr.",
  image : "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0e805b0-74e1-477e-9175-54ab3734889c/jr-superfly-9-club-mercurial-dream-speed-younger-older-mg-high-top-football-boot-1dCRMK.png",
  price : "5495.00",
  des : "Air Zoom Pegasus 40",
  // buttonMessage : "Add To Cart"
}
]
  return (
    <>
<div className='mainBanner mb-10'>
  <h1 className='bannerSpanOne'>Lets walk with u r style </h1>
  <p className='bannerSpanTwo'>EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS</p>
</div>
<div className='running-Banner'></div>
<div className='demo mb-10'>
{data.map((element,index) => (
  <ProductCard 
  key={`${index}-${element.iteam}`} 
  service={element} 
  />
))}
</div>
<div className='footer mb-10'>
    <h3>Chat Me @giri</h3>
</div>

    </>
  )
}
