import { Link } from 'react-router-dom';
import React,{ useState,useContext,useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import { ProductList } from '../adminDashboard/products/productList';
import  {ProductState}  from '../adminDashboard/products/store/ProductState';
import { HomeProductList } from './HomeProductList';
import './Home.css'
import { ProductForm } from '../adminDashboard/products/product-form/productForm';
import CartContext from '../adminDashboard/products/store/CartContext';
import { CartItem } from '../front/CartItem';
import { about } from './about';

export const Home= (props) => {
    const CartCtx=useContext((CartContext));
    const[noofItems,setNoOfItems]=useState(0)
    useEffect(()=>{
        console.log('hello')
        setNoOfItems(CartCtx.cartItems.length)
    },[CartCtx.cartItems])
    return(
        <div className="container">
                <div className="nav">
                    <span className="About"><Link to='/about' className='linktext'>About</Link></span>
                    <span className="About"><Link to='/services' className='linktext'>Services</Link></span>
                    <span className="About"><Link to='/blog' className='linktext'>Blog</Link></span>
                    <span className="About"><Link to='/contact' className='linktext'>Contact us</Link></span>
                    <span className="About"><Link to='/cart' className='linktext'>Cart{noofItems}</Link></span>
                    <span className="login"><Link to='/signin' className='linktext'>Sign In</Link></span>
                    <span className="signupcss"><Link to='/signup' className='linktext'>Sign Up</Link></span>
                </div>
            <div className="slideimage1">
                <img src="https://media.istockphoto.com/vectors/vector-3d-realistic-perfume-bottle-ad-poster-vector-id1204238674" className="slideimage"></img>
            </div>
            <div className="toppicks2"><span className='toppicks'>Top Picks</span>
                < ProductState>
                    <HomeProductList/>
                </ProductState>
            </div>
        </div>
    )
}