import React from 'react'

import { AdminLogin } from '../../../API/AdminInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate=useNavigate()
const Auth=async (e)=>
    {
e.preventDefault()
const form=new FormData(e.target)
console.log(Object.fromEntries(form.entries()));
const LoginData=Object.fromEntries(form.entries())


const abcd=await AdminLogin(LoginData).then(()=>
{

navigate('/admin/home')

}).catch((err)=>
{
  console.log(err);
})
console.log(abcd);
   }

  return (
    <div>
<div className="h-screen">
<div className='flex justify-center h-full items-center p-3 '>
<div className='border-4 border-violet-500 w-auto h-auto rounded-xl'>

    <label htmlFor="" className='font-bold text-4xl flex justify-center mb-4'>Login</label>
    <form onSubmit={Auth} action="">
<div className="p-3">
    <label className='font-bold' htmlFor="">username</label>
    <input name='username' className='border-2 border-violet-500 p-2 w-full rounded-sm mb-5' type="text" />
    <label className='font-bold' htmlFor="">  password</label>

    <input name='password' className='border-2 border-violet-500 p-2 w-full rounded-sm mb-5' type="password" />
   
    <button class="mb-5 w-full flex justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
</div>
</form>
</div>

</div>
</div>

    </div>
  )
}

export default Login