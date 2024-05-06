import '../App.css';
import { useEffect } from "react";
import ProductCard  from '../Components/ProductCard';
import { saveAllProducts } from "../Redux/Reducer/product";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../Redux/Reducer/cart";
import { Link } from "react-router-dom";

export default function Home(){
  const dispatcher = useDispatch();
  const { productItems = [] } = useSelector((store) => store.Products);
  const { items = [] } = useSelector((store) => store.cart);

  useEffect(() => {
    fetch("http://localhost:5173/product.json")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(saveAllProducts(result.products));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function isAddedToCart(id = 0) {
    // Ensure items is an array before using the find method
    if (!Array.isArray(items)) {
        return false;
    }
    const matchingElement = items.find(item => item.id === id);
    if (!matchingElement?.id) {
      return false;
    }
    return true;
}

  function addToCart(data) {
    if (data.id) {
      dispatcher(addItemToCart(data));
    }
  }

  return (
    <>
<div className='mainBanner mb-10'>
  <h1 className='bannerSpanOne'>Lets walk with u r style </h1>
  <p className='bannerSpanTwo'>EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS</p>
</div>
<div className='running-Banner'></div>
<div className='demo mb-10'>
{productItems.map((element,index) => (
  <ProductCard 
  key={`${index}-${element.iteam}`} 
  data={element} 
  addToCart={addToCart}
  isAddedToCart={isAddedToCart(element.id)}
  />
))}
</div>
<div className='footer mb-10'>
    <h3>Chat Me @giri</h3>
</div>

    </>
  )
}
