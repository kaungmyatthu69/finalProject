import Cookies from 'js-cookie'
import React from 'react'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {AiTwotoneEdit} from "react-icons/ai"
import { useDeleteContactMutation, useGetContactsQuery } from '../features/api/contactApi'
import { Link } from 'react-router-dom'

const Table = () => {
    const token= Cookies.get('token')
    const {data} = useGetContactsQuery({token})
    const contacts=(data?.contacts?.data);
  const [deleteContact] = useDeleteContactMutation();
    const deleteHandler=async(id,token)=>{
        const data =await deleteContact(id,token)

    }
   
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg container  mx-auto my-5">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
            contacts?.map((contact,index)=>{
                return(
                    <tr  key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {contact.name}
                    </th>
                    <td className="px-6 py-4">
                        {contact.email}
                    </td>
                    <td className="px-6 py-4">
                        {contact.phone}
                    </td>
                    <td className="px-6 py-4">
                       {contact.address}
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={()=>deleteHandler({id:contact.id,token})} ><RiDeleteBin6Fill className='text-red-500 ' size={20}/></button>
                      <Link to={`/contact/${contact.id}`}><button  ><AiTwotoneEdit className='text-blue-500 ml-3 ' size={20}/></button></Link>

                    </td>
                </tr>
                )
            })

        }
          
            
            
          
         
        </tbody>
    </table>
</div>

  )
}

export default Table