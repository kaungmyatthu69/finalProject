import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../features/api/authApi';


const Register = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [password_confirmation,setPasswordComfirmation]= useState('')
    const [error,setError] = useState({})
   const [registerUser]= useRegisterUserMutation();
   const navigate=useNavigate();
    const submitHandler=async(e)=>{
        e.preventDefault()
        const user={name,email,password,password_confirmation}
      
        const data= await registerUser(user)
        if(data?.data?.success) navigate('/login')
        console.log(data);
       setError(data?.error?.data?.errors);

        
       
        
    }
  return (
    <div className="w-full h-screen flex justify-center items-center  ">
      <form
        action=""
        onSubmit={submitHandler}
        className=" flex flex-col justify-center items-center shadow-md rounded-sm pb-8 gap-10 bg-gray-100 p-5"
      >
        <h1 className="text-3xl font-semibold  text-green-600">Register Account</h1>
        <div>
          <input
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="enter your name"
            className=" w-72 border-b-2 px-3 py-2 outline-none bg-transparent"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="enter your email address"
            className=" w-72 border-b-2 px-3 py-2 outline-none bg-transparent"
          />
          <span>{error?.email?.map((item)=><p className='text-red-500'>{item}</p>)}</span>
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
        <span>{error?.password?.map(item=><p className='text-red-500'>{item}</p>)}</span>

        <div className="flex flex-col gap-5">
          <small>
            Already have a account ?
            
            <Link to={'/login'}>
                <span className="text-green-500 cursor-pointer">
                  Login account
                </span>
            </Link>
          </small>
          <button type='submit' className="bg-green-600 px-10 py-1 text-white rounded cursor-pointer">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register