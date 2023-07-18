import React, { useContext, useState } from 'react';
import axios from 'axios';
import './productForm.css';
import ProductContext from '../store/ProductContext';
export const ProductForm = (props) => {
    const ProductCtx = useContext(ProductContext)
    /*const [productName,setProductName] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [productImage,setProductImage] = useState('');
    const [productDescription,setProductDescription] = useState('');*/
    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'', 
        productImage:'',
        productDescription:''
    })
    const productNameHandler = (event) => {
        setFormInput({
            ...formInput,
            productName:event.target.value
        })
        // setFormInput((prevState)=>{
        //     return{
        //         ...prevState,
        //         productName:event.target.value
        //     }
        // })
    }
    const productPriceHandler = (event) => {
        setFormInput({
            ...formInput,
            productPrice:event.target.value
        })
    }
    const productImageHandler = (event) => {
        setFormInput({
            ...formInput,
            productImage:event.target.value
        })
    }
    const productDescriptionHandler = (event) => {
        setFormInput({
            ...formInput,
            productDescription:event.target.value
        })
    }
    const[err,setErr]=useState({
        isError: false,
        message:''
    })
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if(formInput.productName == ''){
            setErr({
             isError: true,
             message:'Product name is required'
            })
        }
         else if(formInput.productPrice == ''){
             setErr({
                 isError: true,
                 message:'Product price is required'
             })
        }
        else{
            setErr({
                isError: false,
                message:''
            })
            await saveproductdata(formInput);
            //props.onProductAdded(formInput);
        }
       
    }
    const saveproductdata = async (formData) => {
        const produc = {
            product_name : formData.productName,
            product_description : formData.productDescription,
            product_price : formData.productPrice,
            product_image : formData.productImage
        }
        const message = await axios.post("http://localhost:1200/product",produc,{
            header:{
                'Content-Type': 'application/json'
            }
        })
        console.log(message.data.Summary)
        console.log(ProductCtx.setProducts([...ProductCtx.Products,produc]))
    }
    /*const productNameHandler = (event) => {
        setProductName(event.target.value);
    }
    const productPriceHandler = (event) => {
        setProductPrice(event.target.value);
    }
    const productImageHandler = (event) => {
        setProductImage(event.target.value);
    }
    const productDescriptionHandler = (event) => {
        setProductDescription(event.target.value);
    }*/
    return(
        <div className="product-form">
            <form onSubmit={formSubmitHandler}>
                {err.isError ? <div>{err.message}</div> : null}
                <div className="form-group">
                    <input type= "text" placeholder='Product Name' onChange={productNameHandler}></input>
                </div>
                <div className="form-group">
                    <input type= "text" placeholder="Product Price" onChange={productPriceHandler}></input>
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                    <input type= "text" placeholder='Product Image' onChange={productImageHandler}></input>
                </div>
                <div className="form-group">
                    <input type= "text" placeholder='Product Description' onChange={productDescriptionHandler}></input>
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  <button className='btn_add' >Add Product</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )

}