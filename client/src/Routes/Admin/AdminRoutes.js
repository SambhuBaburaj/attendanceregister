import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Admin/Login/Login'
import Home from '../../Pages/Admin/Home/Home'
import ManageClass from '../../Pages/Admin/Home/ManageClass'
import Managestudent from '../../Pages/Admin/Home/Managestudent'
import ManageTeachers from '../../Pages/Admin/Home/ManageTeachers'
import AddStudent from '../../Pages/Admin/Home/AddStudent'
import Studentes from '../../Pages/Admin/Home/Students'
import ManageAttendance from '../../Pages/Admin/Home/ManageAttendance';
import Attendence from '../../Pages/Admin/Home/Attendence';
import Table from '../../Pages/Admin/Home/Table1';
function AdminRoutes() {
  return (
 <Routes> 

    <Route element={<Login/>} path='/admin'/>

    
      <Route element={<Home/>} path='/admin/home'/>
      <Route element={<ManageClass/>} path='/admin/manageclass'/>
      <Route element={<Managestudent/>} path='/admin/managestudents'/>
      <Route element={<ManageTeachers/>} path='/admin/manageteachers'/>
    <Route element={<Studentes/>} path='/admin/students'/>
    <Route element={<ManageAttendance/>} path='/admin/manageAttendance'/>
    <Route element={<Attendence/>} path='/admin/attendance'/>



    <Route element={<AddStudent/>} path='/admin/addstudent'/>
    <Route element={<Table/>} path='/admin/table'/>



 </Routes>
  )
}

export default AdminRoutes