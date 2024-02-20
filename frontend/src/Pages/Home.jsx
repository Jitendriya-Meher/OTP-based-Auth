import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-10">
      <Link to={"/signup"}>
        <button className=' m-4 p-2 bg-blue-300 rounded-md hover:bg-blue-400'>
          Sign Up
        </button>
      </Link>
      <Link to={"/login"}>
        <button className=' m-4 p-2 bg-blue-300 rounded-md hover:bg-blue-400'>
          Log In
        </button>
      </Link>
    </div>
  )
}

export default Home