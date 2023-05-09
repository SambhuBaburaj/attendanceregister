import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginUser from '../../Pages/User/attendanceSIde/Login';
import Attendance from '../../Pages/User/attendanceSIde/Attendance';
import LoginProtective from '../ProtectiveRoutes/LoginProtective';
import UserProtective from '../ProtectiveRoutes/UserProtective';
import Home from '../../Pages/User/attendanceSIde/Home';
import Classesdetail from '../../Pages/User/attendanceSIde/Classes';

function TeacherRoutes() {
  return (
   <Routes>
    <Route element={<LoginProtective/>}>
<Route element={<LoginUser/>} path='/'/>
</Route>
<Route element={<UserProtective/>}>
<Route element={<Home/>} path=''>
<Route element={<Classesdetail/>} path='/home'/>
<Route element={<Attendance/>} path='/takeattendance'/>
</Route>
</Route>
   </Routes>
  )
}

export default TeacherRoutes