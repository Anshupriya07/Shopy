import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export const Signup  = () => {
    
    const navigate = useNavigate();
    const [er,setEr] = useState('')
    const[user,setUser] = useState({
        email : '',
        password : ''
    })
    const userEmailHandler = (event) =>{
        setUser((prevState)=>{
            return{
                ...prevState,
                email:event.target.value
            }
        })
    }
    const userPasswordHandler = (event) =>{
        setUser((prevState)=>{
            return{
                ...prevState,
                password:event.target.value
            }
        })
    }
    
    const[err,setErr]=useState({
        isError: false,
        message:''
    
    })
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(user.email == ''){
            setErr({
             isError: true,
             message:'User email is required'
            })
        }
        else if(user.password == ''){
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
            axios.post('http://localhost:1200/login',user,{
                headers :{
                    'Content-Type': 'application/json'
                }
            }).then(response=>{
                navigate('/adminpage')
            })
            .catch(error=>{
                setEr(error.response.data.error)
            });
            
        }
    }
    return(
        <div className="form-container">
            <form onSubmit={formSubmitHandler}>
                <div className="header">Admin Login</div>
                { er !== '' &&
                    <div className="Danger">{er}</div>
                } 
                <div className = "email-container">
                    <input type= "email" placeholder='User Email' onChange={userEmailHandler}></input>
                </div>
                <div className = "password-container">
                    <input type= "password" placeholder='Password' onChange={userPasswordHandler}></input>
                </div>
                <div className = "login-button">
                    <button className='btn_login' >Login</button>
                </div>
            </form>
        </div>
    )
}