import React, { useState } from 'react';
import './Authentication.css';
import Navbar from '../Component/Navbar/Navbar';
import Footer from './../Component/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignUp() {
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
        name : '',
        email : '',
        password : ''
    })
    const handleChange = (e) =>{
        setData({...data, [e.target.name] : e.target.value});
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {name, email, password} = data;

        if(name.length < 3){
            toast.error('Name must be at least 3 character!', alert);
        }
        else if(email === '' || !email.includes('@gmail.com')){
            toast.error('Please enter a valid email!', alert);
        }
        else if(password.length < 6){
            toast.error('Password must be at least 6 character!', alert);
        }
        else{
            const {data} = await axios.post('https://snapdeal-e-commerce-api.onrender.com/api/auth/SignUp',{
                name,
                email,
                password
            });
            if(data.status === 'true'){
                toast.success('SignUp Successfully!');
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
                <h4>Create your account</h4>
                <input onChange={handleChange} className='border-0 mt-3 p-2' type="text" placeholder='Enter your name' name="name" autoFocus />
                <input onChange={handleChange} className='border-0 mt-3 p-2' type="email"placeholder='Enter your email'  name="email" />
                <input onChange={handleChange} className='border-0 mt-3 p-2 mb-3' type="text" placeholder='Enter your password' name="password" />
                <button type='submit'>SignUp</button>
                <p className='p-2 text-center m-0'>Already have an account?</p>
                <Link to='/Login' className='auth-link'>
                    <button>Login</button>
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

export default SignUp;