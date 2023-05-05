import AdminInstance from "./Axios";

export const getStudents=async (data)=>
{
    return await AdminInstance.get(`admin/getstudents?class=${data}`)
}
export const Addstudent = async (data)=>
{
    return await AdminInstance.post('/admin/addstudent',data)
}
export const deleteStudent =async ()=>
{
    // return await AdminInstance.
}
export const pauseStudent =async (e)=>
{
    return await AdminInstance.get(`/admin/pausestudent?student=${e}`)
}
export const editStudent =async ()=>
{
    // return await AdminInstance.
}