import AdminInstance from "./Axios";

export const UsrLogin=async (data)=>
{
return await AdminInstance.post('/loginuser',data)
}


export const MarkAttendance=async (data1,data2)=>
{
    console.log(data1,data2);
return await AdminInstance.post('/markattendance',{data1,data2})

}


export const TakenAttandance =async(data)=>
{
return await AdminInstance.get(`/attadancecheck?class=${data}`)

}