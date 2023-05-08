import AdminInstance from "./Axios";


export const AddTeachers=async (data)=>
{
   
   return  await AdminInstance.post("/admin/addteachers",{data})  
}
export const GetTeachers=async()=>
{
    return  await AdminInstance.get('/admin/getteahcers')
}