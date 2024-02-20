import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {

        e.preventDefault();
        
        const res = await axios.post("http://localhost:4000/api/forgot",{
            email, 
        });

        const data = await res.data;
        console.log(data);

        toast.success(data.message);
        navigate("/verify");

    }

  return (
    <div className=' w-screen min-h-screen flex justify-center items-center'>

        <form className=' bg-white shadow-md w-1/3 min-h-1/2 p-5 rounded-md flex flex-col gap-3'
        onSubmit={handleSubmit}>

            <h2 className=' font-bold text-2xl text-gray-800'>
                Forgot Password
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

            <button className=' px-3 py-2 font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
                Send Otp
            </button>

        </form>
    </div>
  )
}

export default Forgot