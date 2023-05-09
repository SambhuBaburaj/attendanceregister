import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginUser from '../../Pages/User/attendanceSIde/Login';
import Sidebar from '../../Pages/User/attendanceSIde/Sidebar';
import Classes from '../../Pages/User/attendanceSIde/Classes';
import Attendance from '../../Pages/User/attendanceSIde/Attendance';

function TeacherRoutes() {
  return (
   <Routes>
<Route element={<LoginUser/>} path='/'/>


<Route element={<Sidebar/>} path=''>
<Route element={<Classes/>} path='/home'/>
<Route element={<Attendance/>} path='/attendance'/>

</Route>
   </Routes>
  )
}

export default TeacherRoutes