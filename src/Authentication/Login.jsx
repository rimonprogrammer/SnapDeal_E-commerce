import React, { useState } from 'react';
import './Authentication.css';
import Navbar from '../Component/Navbar/Navbar';
import Footer from './../Component/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const alert = {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition : Bounce,
    };
    const [data, setData] = useState({
        email : '',
        password : ''
    })
    const handleChange = (e) =>{
        setData({...data, [e.target.name] : e.target.value});
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {email, password} = data;

        if(email === '' || !email.includes('@gmail.com')){
            toast.error('Please enter a valid email!', alert);
        }
        else if(password.length < 6){
            toast.error('Password must be at least 6 character!', alert);
        }
        else{
            const {data} = await axios.post('https://snapdeal-e-commerce-api.onrender.com/api/auth/Login',{
                email,
                password
            });
            if(data.status === 'true'){
                toast.success('Login Successfully!');
                localStorage.setItem('SnapDeal_User',JSON.stringify(data.user));
                setTimeout(()=>{
                    navigate('/');
                }, 2000)
            }
            if(data.status === 'false'){
                toast.error(data.msg, alert);
            }
        }
    }
  return (
    <>
        <Navbar/>
        <div className='authentication'>
            <form onSubmit={handleSubmit}>
                <h4>Login your account</h4>
                <input onChange={handleChange} className='border-0 mt-3 p-2' type="email"placeholder='Enter your email'  name="email" />
                <input onChange={handleChange} className='border-0 mt-3 p-2 mb-3' type="text" placeholder='Enter your password' name="password" />
                <button type='submit'>Login</button>
                <p className='p-2 text-center m-0'>Don't have account?</p>
                <Link to='/SignUp' className='auth-link'>
                    <button>SignUp</button>
                </Link>
            </form>
            <ToastContainer 
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition = {Bounce}
            />
        </div>
        <Footer/>
    </>
  )
}

export default Login