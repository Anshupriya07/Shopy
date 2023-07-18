import { ProductForm } from "../adminDashboard/products/product-form/productForm"
import { ProductList } from "../adminDashboard/products/productList"
import { ProductState } from "../adminDashboard/products/store/ProductState"
import { useNavigate } from "react-router-dom"
import './adminpage.css'
export const AdminPage = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/productList');

    }
    return(
        
        < ProductState>
            <div className="Dashboard">Admin Dashboard</div>
            <div className="Productadd">Add Products</div>
            <ProductForm/>
            <div className="Productdisplay">Retrieve Products</div>
            <div className="product-list" onClick={clickHandler}>
                <button className="btnbtn-primary">Product</button>
            </div>
            {/* <ProductList/> */}
        </ProductState>
        
    )
}