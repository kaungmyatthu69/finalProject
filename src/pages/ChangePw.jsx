import React, { useState } from 'react'
import { useChangePasswordMutation } from '../features/api/authApi';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';


const ChangePw = () => {
    const [current_password,setCurrentPassword] = useState();
    const [password,setPassword]= useState('');
    const token = Cookies.get('token')
    const [password_confirmation,setPasswordComfirmation]= useState('')
    const [changePassword]= useChangePasswordMutation();
    const [error,setError] = useState()
    const navigate= useNavigate()
    const submitHandler=async(e)=>{
        e.preventDefault()
        const newPassword={current_password,password,password_confirmation}
        const data = await changePassword({token,newPassword})
        console.log(data);
        if(!data?.error) navigate('/')
       setError(data?.error?.data?.message);
    }

  return (
    <div>
        <div className="w-full h-screen flex justify-center items-center  ">
      <form
        action=""
        onSubmit={submitHandler}
        
        className=" flex flex-col justify-center items-center shadow-md rounded-sm pb-8 gap-10 bg-gray-100 p-5"
      >
        <h1 className="text-3xl font-semibold  text-blue-500">Change Password</h1>
     
        <div className="">
          <input
            type="password"
            placeholder="enter your Current password "
           onChange={e=>setCurrentPassword(e.target.value)}
           
            className="bg-transparent w-72  border-b-2 px-3 py-2 outline-none "
          />
        </div>
        <div className="">
          <input
            type="password"
            value={password}
            placeholder="enter your password "
            onChange={e=>setPassword(e.target.value)}
            className="bg-transparent w-72  border-b-2 px-3 py-2 outline-none "
          />
        </div>
        <div>
          <input
            type="password"
            value={password_confirmation}
            onChange={e=>setPasswordComfirmation(e.target.value)}
            placeholder="password comfirmation"
            className=" w-72 border-b-2 px-3 py-2 outline-none bg-transparent"
          />
        </div>
        <span className='text-red-500'>{error}</span>
         
        
        <div className="flex flex-col gap-5">
         
          
          <button type="submit" className="bg-blue-500 px-10 py-1 text-white rounded cursor-pointer">
            Comfirm
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ChangePw