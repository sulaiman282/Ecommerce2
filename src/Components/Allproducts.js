import React, { useEffect, useState } from "react";
import axios from "axios";
import allproducts from "../Css/allproducts.css";

export default function Allproducts(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products",
      })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <div className="container product-cart">
        <div className="products-container">
          {loading && (
            <div>
              {" "}
              <h1>Loading...</h1>
            </div>
          )}
  
          {data.map((product) => (
            <div key={product.id} className="card d-flex  justify-content-center">
              <div className="cart-image d-flex  justify-content-center">
                <img src={product.images} alt="#" />
              </div>
              <div className="card-description">
                <a className="productlink d-flex  justify-content-center" style={{color:props.mode==='dark'?'black':'white'}} href="url">
                  {product.title}
                </a>
                <h6 className="price mt-2 fw-bold">৳ {`${product.price + 2000}`}</h6>
                <div className="d-flex justify-content-between w-100">
                <button type="button" className="addcartbtn" style={{color:props.mode==='dark'?'gray':'white'}}><span><i class="fa-solid fa-bag-shopping pe-2"></i>Cart </span></button>
                <button type="button" className="addlistbtn " style={{color:props.mode==='dark'?'gray':'white'}}><span><i class="fa-solid fa-heart pe-2"></i>Wishlist</span></button>
                
                </div>
              </div>
              
            </div>
          ))}
        </div>
  
        
      </div>
    );
  }