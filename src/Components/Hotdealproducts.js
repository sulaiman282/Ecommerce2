import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/hotdealproducts.css"




export default function Hotdealproducts(props) {

  var pathname = window.location.pathname;
  pathname = pathname.substring(1);
  
  if(pathname==="hot_deals"){
    document.title="TSHOP - HOT DEALS";
  }
  

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    var viewlimit=parseInt(props.Hotcount)

    useEffect(() => {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products?offset=0&",
        params: {
          limit: viewlimit
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
                <img src={(product.images==="coffee.png")||product.image? "https://www.motorcyclevalley.com/photo/thumb/New-Suzuki-Gixxer-Carburetor.jpg":product.images} alt="#"
                />
                <span className="offerp">-10%</span>
              </div>
              <div className="card-description">
                <a className="productlink d-flex  justify-content-center" style={{color:props.mode==='dark'?'black':'white'}} href="url">
                  {product.title}
                </a>
                <h6 className="price mt-2 fw-bold">৳{`${product.price + 2000}`}<span className="lowprice" >{`${parseInt((product.price + 2000) -(product.price + 2000)*0.1)}`}</span></h6>
                <div className="d-flex justify-content-between w-100">
                <button type="button" className="addcartbtn" style={{color:props.mode==='dark'?'gray':'white'}} ><span><i className="fa-solid fa-bag-shopping pe-2"></i>Cart </span></button>
                <button type="button" className="addlistbtn " style={{color:props.mode==='dark'?'gray':'white'}}><span><i className="fa-solid fa-heart pe-2"></i>Wishlist</span></button>
                
                </div>
              </div>
              
            </div>
          ))}
         
        </div>
        <div className="m-4 d-flex align-item-center justify-content-center">
      
        
        

        </div>
        
      </div>
    );
  }
