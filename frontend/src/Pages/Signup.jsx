import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {

        e.preventDefault();

        const res = await axios.post("http://localhost:4000/api/signup",{
            email,
            password
        });

        const data = await res.data;
        console.log(data);

        toast.success(data.message);
        navigate("/login");


    }

  return (
    <div className=' w-screen min-h-screen flex justify-center items-center'>

        <form className=' bg-white shadow-md w-1/3 min-h-1/2 p-5 rounded-md flex flex-col gap-3'
        onSubmit={handleSignup}>

            <h2 className=' font-bold text-2xl text-gray-800'>
                Create Your Account
            </h2>

            <div className="">
                <label htmlFor="email">
                    Email 
                </label>
                <input type="email"
                name='email'
                id='email'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className=' w-full border border-gray-300 rounded-md p-1' />
            </div>

            <div className="">
                <label htmlFor="password">
                    Password 
                </label>
                <input type="password"
                name='password'
                id='password'
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className=' w-full border border-gray-300 rounded-md p-1' />
            </div>

            <div className=" text-xs text-gray-600">
                <span className=' mr-1'>
                    Or
                </span>
                <Link to={"/login"} className=' cursor-pointer hover:underline'>
                    Login with existing account
                </Link>
            </div>

            <button className=' px-3 py-2 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                Sign Up
            </button>

        </form>
    </div>
  )
}

export default Signup