import React, { useEffect, useState } from "react";
import { useGetSingleContactQuery, useUpdateContactMutation } from "../features/api/contactApi";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const EditeForm = () => {
    const [name,setName]= useState(); 
    const [phone,setPhone] = useState();
    const [email,setEmail]= useState();
    const [address,setAddress]= useState();
    const {id} = useParams()
    const token = Cookies.get('token')
    const {data}= useGetSingleContactQuery({id,token})
    const [updateContact] = useUpdateContactMutation()
    const navigate= useNavigate()
   const submitHandler=async(e)=>{
    e.preventDefault()
    const editedContact =  {name,email,phone,address}
    const d= await updateContact({id,token,editedContact})
    console.log(d);
    navigate('/')
    
    // console.log(editedContact);
    
  }
  
      
    useEffect(()=>{ 
      setName(data?.contact?.name)
      setEmail(data?.contact?.email)
      setAddress(data?.contact?.address)
      setPhone(data?.contact?.phone)
      console.log("running useeffect");
      

    },[data])
  return (
    <div className="bg-gray-500 py-5 w-96 container mx-auto flex justify-center items-center mt-20">
   
      <form className="space-y-6  w-80" action="#" onSubmit={submitHandler} >
        <h1 className="text-xl font-bold mt-2">Edite Contact</h1>
        <div>
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="Name"
            name="Name"
            defaultValue={name}
            id="Name"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your phone
          </label>
          <input
            type="number"
            name="phone"
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
           
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
           
            required
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your address
          </label>
          <input
            type="address"
            name="address"
            id="address"
            defaultValue={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
           
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditeForm;
