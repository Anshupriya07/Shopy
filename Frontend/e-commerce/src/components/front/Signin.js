import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../adminDashboard/products/store/UserContext';
import './signin.css';
export const Signin = (props) =>{
    const UserCtx = useContext(UserContext)
    const [formInput,setFormInput] = useState({
        full_name:'',
        email:'', 
        password:''
    })
    const full_nameHandler = (event) => {
        setFormInput({
            ...formInput,
            full_name:event.target.value
        })
    }
    const emailHandler = (event) => {
        setFormInput({
            ...formInput,
            email:event.target.value
        })
    }
    const passwordHandler = (event) => {
        setFormInput({
            ...formInput,
            password:event.target.value
        })
    }
    const[err,setErr]=useState({
        isError: false,
        message:''
    })
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if(formInput.email== ''){
            setErr({
             isError: true,
             message:'Email is required'
            })
        }
         else if(formInput.password == ''){
             setErr({
                 isError: true,
                 message:'Password is required'
             })
        }
        else{
            setErr({
                isError: false,
                message:''
            })
            await saveuserdata(formInput);
        }
       
    }
    const saveuserdata = async (formData) => {
        const use = {
            full_name : formData.full_name,
            email : formData.email,
            password : formData.password
        }
        const message = await axios.post("http://localhost:1200/add",use,{
            header:{
                'Content-Type': 'application/json'
            }
        })
        console.log(message.data.Summary)
    }
    return(
        <div className="user-form">
            <div className="user-admin">Admin SignIn</div>
            <form onSubmit={formSubmitHandler}>
                {err.isError ? <div>{err.message}</div> : null}
                <div className="user-groups">
                    <input type= "text" placeholder='User Name' className="texts" onChange={full_nameHandler}></input>
                </div>
                <div className="user-group">
                    <input type= "email" placeholder="Email" onChange={emailHandler}></input>
                </div>
                <div className="clearfix"></div>
                <div className="user-group1">
                    <input type= "password" placeholder='Password' onChange={passwordHandler}></input>
                </div>
                <div className="user-group">
                  <button className='btn_signin' >Signin</button>
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )

}