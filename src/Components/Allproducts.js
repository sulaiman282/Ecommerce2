import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/allproducts.css";

export default function Allproducts(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    var viewlimitp=parseInt(props.productcount)

    useEffect(() => {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products?offset=0&",
        params: {
          limit: viewlimitp
         }
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
              <img src="https://i.gifer.com/YCZH.gif" alt="Loading"   onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src="https://i.stack.imgur.com/kOnzy.gif";
              }}/>
            </div>
          )}
  
          {data.map((product) => (
            <div key={product.id} className="card d-flex  justify-content-center">
              <div className="cart-image d-flex  justify-content-center">
                <img src={(product.images==="coffee.png")||product.image? "https://www.motorcyclevalley.com/photo/thumb/New-Suzuki-Gixxer-Carburetor.jpg":product.images} alt="#dd"
                onError={({ currentTarget }) => {
                  currentTarget.onError = null; 
                  currentTarget.src="https://i.pinimg.com/originals/6d/a8/78/6da878cf7299317b2bd88c7471111626.gif";
                }}
               />
              </div>
              <div className="card-description">
                <a className="productlink d-flex  justify-content-center" style={{color:props.mode==='dark'?'black':'white'}} href="url">
                  {product.title}
                </a>
                <h6 className="price mt-2 fw-bold">৳ {`${product.price + 2000}`}</h6>
                <div className="d-flex justify-content-between w-100">
                <button type="button" className="addcartbtn" style={{color:props.mode==='dark'?'gray':'white'}} ><span><i className="fa-solid fa-bag-shopping pe-2"></i>Cart </span></button>
                <button type="button" className="addlistbtn " style={{color:props.mode==='dark'?'gray':'white'}}><span><i className="fa-solid fa-heart pe-2"></i>Wishlist</span></button>
                
                </div>
              </div>
              
            </div>
          ))}
        </div>
  
        
      </div>
    );
  }