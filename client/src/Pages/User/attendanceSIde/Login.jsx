import React, { useState } from 'react';
import myImage from '../../../Assets/Images/WhatsApp Image 2023-05-09 at 4.01.06 PM.jpeg';
import { UsrLogin } from '../../../API/UserSide';
import { useNavigate } from 'react-router-dom';
function LoginUser() {
  const navigate=useNavigate()
const [err, seterr] = useState()
const SubmitForm= async (e)=>
{
  e.preventDefault()
const form=new FormData(e.target)
const LoginData=Object.fromEntries(form.entries())
UsrLogin(LoginData).then(data=>
  {
    console.log('respose here');
    console.log(data);
    seterr('')
    localStorage.setItem('accessToken',data.data.accessToken)
    localStorage.setItem('User',JSON.stringify(data.data.User))
    navigate('/home')

  }).catch(err=>
    {
      console.log(err);
seterr('username/password incorrect')

    })

}

  return (
<section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-xs">
        <img
          src={myImage}
          alt="" />
      </div>
      <div className="md:w-1/3 max-w-sm">
      <form onSubmit={SubmitForm} action="">

        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Wisdom</p>
        </div>
        <p className='text-red-500'>{err}</p>
        <input required name='username' className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input required name='password' className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          {/* <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a> */}
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        {/* <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
        </div> */}
      </form>

      </div>
    </section>
  );
}

export default LoginUser;