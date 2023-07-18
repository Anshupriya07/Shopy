import React from 'react';
import { useContext } from 'react';
import CartContext from '../adminDashboard/products/store/CartContext';
import { CartItem } from './CartItem';
import './HomeProduct.css'

export const HomeProduct = (props)=>{
    const CartCtx=useContext(CartContext);
    const buyNowHandler=()=>{
        const cartObject={
            product_name:props.product_name,
            qty:1,
            product_price:props.product_price

        }
        let CartItems=[...CartCtx.cartItems]
        CartItems=CartItems.filter(cartitem=>cartitem.product_name===props.product_name)
        if(CartItems.length>0){
            CartItems[0].qty=CartItems[0].qty + 1
        }else{
            CartCtx.setCartItems([...CartCtx.cartItems,cartObject])
        }
        console.log(CartCtx.cartItems);
    }
    return(
        <div className="product_container">
            <div className="product_1">
                <div className="product_name">{props.product_name}</div>
                <div className="product_image1">
                    <img src= {props.product_image}></img>
                </div>
                <div className="product_name">{props.product_description}</div>
                <div className="product_price">{props.product_price}</div>
                <div className="product_buynow" onClick={buyNowHandler}>Buy Now</div>
            </div>
        </div>
        
    )
}