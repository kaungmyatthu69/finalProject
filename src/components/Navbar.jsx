import React from 'react'
import {FcBusinessContact} from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutUserMutation } from '../features/api/authApi'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../features/services/authSlice'
import Cookies from 'js-cookie'

const Navbar = () => {
  const user= JSON.parse( Cookies.get('user'))
  const token= Cookies.get('token')
  const dispatch= useDispatch()

  const navigate= useNavigate()
  const [logoutUser]= useLogoutUserMutation()
  const logoutHandler=async()=>{
     const data=await logoutUser({token})
     console.log(data);
     dispatch(removeUser())
    navigate('/login')
  }

  return (
   <nav className='flex container rounded-md shadow-md items-center justify-between px-20 mx-auto py-3 bg-black text-white'>
    <div className='flex justify-center items-center gap-3 '>
      <FcBusinessContact size={30} />
        <h1>Recontact</h1>
    </div>
    <div className='flex gap-3 justify-center items-center'>
      <div className='flex gap-3'>
      <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </div>
      
      <Link to={'/changepassword'}>
        <p  className='decoration-solid underline text-blue-300 decoration-blue-300 '>Change Password</p>
      </Link>

      <button onClick={logoutHandler} className='bg-gray-200 text-black py-1 px-3 rounded-md '>Logout</button>
    </div>
   </nav>
  )
}

export default Navbar