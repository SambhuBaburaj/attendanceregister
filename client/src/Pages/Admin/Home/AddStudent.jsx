import React, { useState } from 'react'
import { Addstudent } from '../../../API/adminStudentInstance'
import { useLocation } from 'react-router-dom';

function AddStudent() {
  const location=useLocation()
const[msg,setmsg]=useState()

console.log(location.state.class);
const StudentSubmit=(e)=>
{
 
  e.preventDefault()
  const form=new FormData(e.target)

  const formdata= Object.fromEntries(form.entries())
  formdata.class=location.state.class
  console.log(formdata);
  Addstudent(formdata).then(d=>
    {
      const {data}=d
      console.log(data);
      if(data.res===0)
      {
        setmsg(['this student is already added','text-red-400'])
      }
      else{
        setmsg(['successfully added student','text-green-500'])



      }

    })
    document.getElementById("myForm").reset();
}



  return (
    <div className=''>
      <label  className='text-bold text-4xl  text-center flex justify-center' htmlFor=""> Add student</label>
      {msg&&<p className={`font-bold flex justify-center mt-4 ${msg[1]}`}>{msg[0]}</p>}
<div className=' flex justify-center '>
 
  <div className='border-violet-400 border-2 p-7 mt-7 rounded-xl'> 
  <form  id='myForm' onSubmit={StudentSubmit} className=' '>
  <div class="relative z-0 w-full mb-6 group ">
      <input   type="text" name="Student" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student Name</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="number" name="Phone" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
  </div>



  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
  </div>


</div>



    </div>
  )
}

export default AddStudent