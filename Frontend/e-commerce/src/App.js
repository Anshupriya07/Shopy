import './App.css';
import React,{ useState, useEffect } from 'react';
import { Routes , Route} from 'react-router-dom';
import { Home } from './components/front/Home'
import  {ProductList} from './components/adminDashboard/products/productList';
import { ProductState } from './components/adminDashboard/products/store/ProductState';
import { Product } from './components/adminDashboard/products/product'
import {ProductForm } from './components/adminDashboard/products/product-form/productForm'
import { HomeProductList} from './components/front/HomeProductList'
import { Contact } from './components/front/contact';
import { Signup } from './components/front/signup'
import { AdminPage } from './components/front/adminpage';
import {Update} from './components/front/Update'
import { Cart } from './components/front/Cart';
import { CartState } from './components/adminDashboard/products/store/CartState';
import { Signin } from './components/front/Signin';
import { UserState } from './components/adminDashboard/products/store/UserState';
import { About} from './components/front/about'
import { Services } from './sevices';
import { Blog } from './components/front/blog';
function App() {
  // const [products,setProducts]  = useState([]);
  // const addnewProductHandler = (product) => {
  //   console.log('Added product')
  //   const productobj = {
  //     product_name : product.productName,
  //     product_image : product.productImage,
  //     product_price : product.productPrice,
  //     product_description : product.productDescription
  //   }
  //   setProducts([...products,productobj])
  // }
  // useEffect(() =>{
  //   getProducts()
  // },[])

  // const getProducts = async () => {
  //   const data = await fetch("http://localhost:1200/product");
  //   const product_data = await data.json();
  //   setProducts([...products,...product_data.products]);
  // }
  return (
    <div className="App">
      {/* < ProductState>
                <ProductForm/>
                <ProductList/>
        </ProductState> */}
      {/* <AuthState> */}
      < ProductState>
        <CartState>
          <UserState>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/form" element={<ProductForm/>} />
              <Route path="/update" element ={<Update/>}/>
              <Route path = "/productlist" element={<ProductList/>} />
              <Route path="/adminpage" element={<AdminPage/>}/>
              <Route path = "/cart" element={<Cart/>} />
              <Route path = "/signin" element={<Signin/>} />
            </Routes>
            </UserState>
        </CartState>
        </ProductState>
      {/* </AuthState> */}
    </div>
  );
}

export default App;
