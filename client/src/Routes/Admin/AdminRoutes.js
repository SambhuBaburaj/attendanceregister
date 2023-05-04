import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Admin/Login/Login'
import Home from '../../Pages/Admin/Home/Home'
import ManageClass from '../../Pages/Admin/Home/ManageClass'
import Managestudent from '../../Pages/Admin/Home/Managestudent'
import ManageTeachers from '../../Pages/Admin/Home/ManageTeachers'
import AddStudent from '../../Pages/Admin/Home/AddStudent'
import Studentes from '../../Pages/Admin/Home/Students'
function AdminRoutes() {
  return (
 <Routes> 
    <Route element={<Login/>} path='/admin'/>
      <Route element={<Home/>} path='/admin/home'/>
      <Route element={<ManageClass/>} path='/admin/manageclass'/>
      <Route element={<Managestudent/>} path='/admin/managestudents'/>
      <Route element={<ManageTeachers/>} path='/admin/manageteachers'/>
    <Route element={<Studentes/>} path='/admin/students'/>

    <Route element={<AddStudent/>} path='/admin/addstudent'/>



 </Routes>
  )
}

export default AdminRoutes