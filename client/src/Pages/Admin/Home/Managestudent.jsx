import React from 'react'
import { useNavigate } from 'react-router-dom'

function Managestudent() {
  const navigate=useNavigate()
  return (

    <div> <div className='h-screen  '>
    <div className=' flex justify-center items-center h-full'>
      <div className="rounded-xl h-auto w-96 border-4 border-violet-400">
<div className="p-4">
<div className="  ">
  <label className='  font-bold text-4xl mb-5 underline flex justify-center' htmlFor="">Classes</label>
 <div className='flex justify-center'>
 <button onClick={()=>
 {
  navigate('/admin/students')
 }}
  type="button" class="w-1/2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Class 8</button>

 </div >
  
 <div className='flex justify-center'>
 <button type="button" class="w-1/2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Class 10</button>

 </div>
 <div className='flex justify-center'>
 <button type="button" class="w-1/2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Class 11</button>

 </div>

</div>
</div>
      </div>
    </div>

  </div></div>
  )
}

export default Managestudent