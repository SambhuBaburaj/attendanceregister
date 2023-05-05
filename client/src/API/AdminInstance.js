import AdminInstance from "./Axios";


export const AdminLogin=(data)=>
{
  return  AdminInstance.post('/admin/loginadmin',data)
}
export const Classes=async ()=>

{

  return await AdminInstance.get('/admin/getclasses')
}
export const addClass=async (classname)=>
{
  console.log(classname);
return await  AdminInstance.post('/admin/addclass',{classname})
}
export const removeClass=async (classnumber)=>
{
return await AdminInstance.get(`/admin/deleteclass?class=${classnumber}`)
}