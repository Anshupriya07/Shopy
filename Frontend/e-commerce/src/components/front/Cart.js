import React,{useContext,useEffect} from 'react';
import { CartItem } from "./CartItem";
import CartContext from '../adminDashboard/products/store/CartContext';
 export const Cart = () => {
    const CartCtx=useContext(CartContext)
  return (
    <div className="container">
      <div className="cart-box mx-auto m-4">
         {/* <CartItem/>
        <CartItem/> */}
        {CartCtx.cartItems.map((item,index)=>
            <CartItem product_name={item.product_name} product_price={item.product_price} qty={item.qty} key={index}/>
        )}

      </div>
     </div>
   )
 }