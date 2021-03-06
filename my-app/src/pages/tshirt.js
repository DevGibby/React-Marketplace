import React, { useState , useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

export default function Tshirt() {

    const [product, setProduct] = useState({});
 useEffect (() => {
 axios.get('https://fakestoreapi.com/products/20')
 .then(data => {
     setProduct(data.data);
     console.log(data.data);
 })
 .catch(err => console.log(err));
},[]);

    
       

    //effect to make component/page go to top on load
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


// makes an image display when the page loads
function shirtLoadHandler() {
        document.getElementById("shirt1").style.display = "block";
        
    }

    function displayShirthandler1() {
        document.getElementById("shirt1").style.display = "block";
        document.getElementById("shirt2").style.display = "none";
        document.getElementById("shirt3").style.display = "none";
    }
    function displayShirthandler2() {
        document.getElementById("shirt2").style.display = "block";
        document.getElementById("shirt1").style.display = "none";
        document.getElementById("shirt3").style.display = "none";
    }
    function displayShirthandler3() {
        document.getElementById("shirt3").style.display = "block";
        document.getElementById("shirt1").style.display = "none";
        document.getElementById("shirt2").style.display = "none";
    }
    
    
   
    return (
        
        <div>
            <section className="tshirt-page" onLoad={shirtLoadHandler}>
                
        <div className="image-container">
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt1" src={product.image} />
            </div>
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt2" src={product.image} />
            </div>
            <div className="mySlides">
                <img className="tshirt-image-slide" id="shirt3" src={product.image} />
            </div>
            <div className="row">
                <div className="column"> 
                    <img className="tshirt-image cursor" src={product.image} onClick={displayShirthandler1} />
                </div>
                <div className="column">
                    <img className="tshirt-image cursor" src={product.image} onClick={displayShirthandler2} />
                </div>
                <div className="column">
                    <img className="tshirt-image cursor" src={product.image} onClick={displayShirthandler3} />
                </div>
            </div>
        </div>
        <div className="tshirt-info">
            <h3 className="tshirt-title">{product.title}</h3>
            <h4 className="tshirt-description">{product.description}</h4>
            {/*<div className="selector-container">
                <label for="selectorOne">Type:
                <select name="selectorOne" id="selectorOne">
                <option value="T-Shirt">T-Shirt</option>
                <option value="Hoodie">Hoodie</option>
            </select></label>
    </div> */}
            
            <div className="radio-container">
                <label className="radio-label">Size:
                <div className="radio-overlap">
                    <label for="radio">S
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">M
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">L
                    <input className="radio" name="radio" type="radio" value="L"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">XL
                    <input className="radio" name="radio" type="radio"/></label>
                </div>
                <div className="radio-overlap">
                    <label for="radio">2XL
                    <input className="radio" name="radio" type="radio" /></label>
                </div>
                </label>
            </div>
            <div className="price-container">${product.price}</div>
            <div className="buttons">
                <Link id="cart-btn" to="/cart">Add to Cart</Link>
                <Link id="checkout-btn" to="/checkout">Checkout</Link>
            </div>
         </div>
        </section>
        </div>
        
    )
}
