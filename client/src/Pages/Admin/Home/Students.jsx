import React from 'react'
import { useNavigate } from 'react-router-dom'

function Students() {
    const navigate=useNavigate()
  return (
    <div className='w-screen'>

    <div className=' py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8' >
    <button onClick={()=>
    {
      navigate('/admin/addstudent')
    }} type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add student</button>

    <div class="flex items-center justify-end  overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200 text-sm border-separate border-spacing-y-2 ml-4 ">
      <thead class="">
        <tr>
        <th>Roll Number</th>
          <th>Name</th>
         
          <th>Phone</th>
          <th>Status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
  
          <td class="td-class text-center">1</td>
          <td class="td-class text-center">nandu</td>
          <td class="td-class text-center">9746369882</td>
          <td class="td-class text-center">
            <span class="float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased">Active</span>
          </td>
          <td class="td-class text-center">
            <span class="float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased">Active</span>
          </td>
        </tr>
        <tr>
  
  <td class="td-class text-center">1</td>
  <td class="td-class text-center">nandu</td>
  <td class="td-class text-center">9746369882</td>
  <td class="td-class text-center">
    <span class="float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased">Active</span>
  </td>
  <td class="td-class text-center">
    <span class="float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased">Active</span>
  </td>
</tr>
     
      </tbody>
    </table>
  </div>
    </div>

</div>
  )
}

export default Students