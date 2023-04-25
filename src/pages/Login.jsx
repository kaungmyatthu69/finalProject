import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../features/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/services/authSlice";

const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState()
  const [loginUser]=useLoginUserMutation()
  const navigate= useNavigate()
  const dispatch= useDispatch();
  const submitHandler=async(e)=>{
    e.preventDefault()
    const user={email,password}
    const data= await loginUser(user)
    dispatch(addUser({user:data?.data?.user,token:data?.data?.token}))
    if(data?.data?.success) navigate('/')
    setError(data?.data?.message)

    console.log(data);

  }

  return (
    <div className="w-full h-screen flex justify-center items-center  ">
      <form
        action=""
        onSubmit={submitHandler}
        className=" flex flex-col justify-center items-center shadow-md rounded-sm pb-8 gap-10 bg-gray-100 p-5"
      >
        <h1 className="text-3xl font-semibold  text-blue-500">Login Account</h1>
        <div>
          <input
            type="text"
            placeholder="enter your email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            className=" w-72 border-b-2 px-3 py-2 outline-none bg-transparent"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="enter your password "
            value={password}
            onChange={e=>setPassword(e.target.value)}
            className="bg-transparent w-72  border-b-2 px-3 py-2 outline-none "
          />
        </div>
          <span className="text-red-500">{error}</span>
        
        <div className="flex flex-col gap-5">
          <small>
            Don't have a account ?{" "}
            <Link to={'/register'}>
                <span className="text-green-500 cursor-pointer">
                  register account
                </span>
            </Link>
           
          </small>
          
          <button type="submit" className="bg-blue-500 px-10 py-1 text-white rounded cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
