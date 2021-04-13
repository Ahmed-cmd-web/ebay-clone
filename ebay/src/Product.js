import React from 'react'
import './Product.css'
import { Link } from "react-router-dom";
import store from './Store';





function Product(props) {
const dis = () => {
    store.dispatch({
    type:'more',
      payload: {
      
      title:props.title,
      expiry: props.expiry,
      condition: props.condition,
      src:props.src,
      price: props.price,
      rating: props.rating,
    }

    })
   
  
}

  
    return (
      <Link style={{textDecoration:'none'}} onClick={dis} to="/productdetails">
        <div className="product">
          <div className="productcon">
            <img src={props.src} alt="" />
            <span>${props.price}</span>
          </div>
        </div>
      </Link>
    );
}
export default Product
