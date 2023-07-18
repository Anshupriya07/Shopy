import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Update } from '../../front/Update';


import './product.css'

export const Product = (props)=>{
    const navigate = useNavigate();
    console.log(props.product_id);
    const updateHandler= (event) =>{
        navigate('/update',{ state: { product : props} })
    }
    return(
        <div className="product_container">
            <div className="product_1">
                <div className="product_id">{props.product_id}</div>
                <div className="product_name">{props.product_name}</div>
                <div className="product_image1">
                    <img src= {props.product_image}></img>
                </div>
                <div className="product_name">{props.product_description}</div>
                <div className="product_price">{props.product_price}</div>
                <div className="button" onClick={updateHandler}>
                    <button className="btnbtn-">Update</button>
                </div>
            </div>
        </div>
        
    )
}