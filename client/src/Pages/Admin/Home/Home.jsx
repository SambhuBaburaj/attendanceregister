import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Classes } from '../../../API/AdminInstance'

function Home() {


  
  const navigate=useNavigate()
  return (
    <div className='h-screen  '>
      <div className=' flex justify-center items-center h-full'>
        <div className="rounded-xl h-auto w-96 border-4 border-violet-400">
<div className="p-4">
  <div className=" ">
    <label className=' font-bold text-4xl mb-5 underline flex justify-center' htmlFor="">WISDOM</label>
  <button className="px-40 w-full border-2relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={()=>
  {
    navigate('/admin/manageclass')
  }}>Manage Class</button>
  <button onClick={()=>
  {
    navigate('/admin/managestudents')
  }} className="px-40 w-full border-2relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Manage Students</button>
  <button  onClick={()=>
  {
    navigate('/admin/manageteachers')
  }} className="px-40 w-full border-2relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Manage Teachers</button>
  {/* <button className="px-40 w-full border-2relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Manage Class</button> */}
  
<button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10">Log out</button>
  </div>
</div>
        </div>
      </div>

    </div>
  )
}

export default Home