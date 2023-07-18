import React,{useContext} from "react";
import CartContext from "../adminDashboard/products/store/CartContext";
import './CartItem.css'

export const CartItem = (props) => {
    const CartCtx = useContext(CartContext)
    let CartItems = [...CartCtx.cartItems]
    const addhandler = () =>{
       if(CartItems[0].qty >= 1){
            CartItems[0].qty = CartItems[0].qty + 1;
            CartCtx.setCartItems([...CartCtx.cartItems])
        }
    } 
    const subhandler = () =>{
        if(CartItems[0].qty >= 2){
            CartItems[0].qty = CartItems[0].qty - 1;
            CartCtx.setCartItems([...CartCtx.cartItems])

        }
    }
  return (
    <div className="containers">
      <div className="container1">{props.product_name}</div>
      <div className="clearfix"></div>
      <div className="container2">
        <div className="row">
          <div className="button" onClick={addhandler}>
            <button className="btn btn-">+</button>
          </div>
          
          <div className="col-md-4">
          <div className="clearfix"></div>
            <form>
              <input type="text" value={props.qty} className="form-control" readOnly />
            </form>
          </div>
          <div className="button" onClick={subhandler}>
            <button className="btnbtn-1">-</button>
          </div>
        </div>
      </div>
      <div className="containers5">{Number(props.product_price)*props.qty}</div>
    </div>
  );
};