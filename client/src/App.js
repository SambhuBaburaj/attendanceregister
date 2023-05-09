import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login/Login';
import Home from './Pages/Admin/Home/Home';
import AdminRoute from'./Routes/Admin/AdminRoutes'
import TeacherRoutes from './Routes/Admin/TeacherRoutes';
function App() {
  return (
    <>
 
      <AdminRoute/>
  
<TeacherRoutes/>

    </>
  );
}

export default App;
