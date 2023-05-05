import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteStudent, getStudents, pauseStudent } from "../../../API/adminStudentInstance";
import ConfirmModal from "../../../components/Admin/Pop-up/ConfirmModal";

import ForDelete from "../../../components/Admin/Pop-up/ForDelete";

function Students() {
  const location = useLocation();
  const [students, setStudents] = useState();
  const [showModal, setShowModal] = useState(false);
  const [fordelete, setfordelete] = useState(false);
  
const [studentid,setstudentid]=useState()
  const classnumber = location.state;
  console.log();

  const studentdata = () => {
    getStudents(classnumber.class).then((data) => {
      setStudents(data.data);
    });
  };

  const handleConfirmAction = () => {
    // Perform action here
    setShowModal(false);
console.log(studentid);
console.log('befor pose');
    pauseStudent(studentid).then((data) => {
      console.log('fiuahwefrr');
      studentdata();
    });
  };

const abcde=(e)=>
{
// console.log(e);
setstudentid(e)
setShowModal(true);

}
const deletebox=(e)=>
{
  setstudentid(e)
  setfordelete(true);


}
const handleDelete=()=>
{


  setfordelete(false);

  deleteStudent(studentid).then(data=>
    {
      studentdata()
    })
}

  useEffect(() => {
    studentdata();
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <div className=" py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
        <button
          onClick={() => {
            console.log(classnumber);
            navigate("/admin/addstudent", {
              state: { class: classnumber.class },
            });
          }}
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add student
        </button>

        <div className="flex items-center justify-end  overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 text-sm border-separate border-spacing-y-2 ml-4 ">
            <thead className="">
              <tr>
                <th>Roll Number</th>
                <th>Name</th>

                <th>Phone</th>
                <th>Status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((value, key) => {
                  
                  return (
                    <tr key={key}>
                      <td className="td-class text-center  rounded-md">
                        {value.serialNumber}
                      </td>
                      <td className="td-class text-center rounded-md">
                        {value.name}
                      </td>
                      <td className="td-class text-center rounded-md">
                        {value.phone}
                      </td>
                      <td className="td-class text-center rounded-md">
                        <div className="flex justify-center ">
                          <div></div>
                          {value.status ? (
                            <span
                              onClick={() => {
                                abcde(value._id)
                                // setShowModal(true);
                              }}
                              className="cursor-pointer text-center float-right rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                            >
                              Active
                            </span>
                          ) : (
                            <span
                              onClick={() => {
                                abcde(value._id)

                                // setShowModal(true);
                              }}
                              className="cursor-pointer text-center float-right rounded-md bg-red-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                            >
                              deactivated
                            </span>
                          )}

                      
                        </div>
                      </td>
                      <td className="td-class text-center  rounded-md">
                        <div className="flex justify-center ">
                          <span onClick={()=>
                          {
                            deletebox(value._id)
                          }} className=" cursor-pointer text-center float-right rounded-md bg-red-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased">
                            Delete
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                    <ConfirmModal
                            showModal={showModal}
                            hideModal={() => setShowModal(false)}
                            confirmAction={() => {
                            
                              handleConfirmAction();
                            }}
                          />

                {fordelete&& <ForDelete
                       showModal={fordelete}
                       hideModal={() => setfordelete(false)}
                       confirmAction={() => {
                       
                         handleDelete();
                       }}
                       />    }   
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
