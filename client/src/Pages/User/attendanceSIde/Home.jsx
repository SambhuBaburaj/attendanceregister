import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';


function Home() {
  

  return (
     <>
     <div>
<Sidebar/>
     </div>
     <div>
<Outlet/>
     </div>
     </>
  );
}
export default Home