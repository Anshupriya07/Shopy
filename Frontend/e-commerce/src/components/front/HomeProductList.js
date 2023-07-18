import React, {useContext,useEffect} from "react";
import ProductContext from "../adminDashboard/products/store/ProductContext";
import { HomeProduct } from "./HomeProduct";
export const HomeProductList = (props) => {
    const ProductCtx = useContext(ProductContext)
    useEffect(()=>{
        console.log('useEffect')
        getProducts();
    },[])
    const getProducts = async () => {
        const data = await fetch("http://localhost:1200/product");
        const products_data = await data.json();
        console.log(products_data)
        ProductCtx.setProducts(products_data.products);
    }
    return(
        <div>
            
            {/* {props.children} */}
            {ProductCtx.Products.map((product,index)=>
            <HomeProduct key={index} product_image={product.product_image} 
                product_name={product.product_name} 
                product_price={product.product_price} 
                product_description={product.product_description}/>)}
        </div>
    )
}