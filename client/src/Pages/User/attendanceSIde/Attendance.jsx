import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import TeacherDropdown from '../../../components/User/TeacherDropdown';
import {MarkAttendance, TakenAttandance} from '../../../API/UserSide'
import { useLocation, useNavigate } from "react-router-dom";
import { getStudents } from '../../../API/adminStudentInstance';
import Confirmation from '../../../components/Admin/Pop-up/Confirmation';

const initialSeatState = [];

const seats = [
  { name: 'Atyut', serialNumber: 1 },
  { name: 'b7i6i', serialNumber: 2 },
  { name: 'ci7fti', serialNumber:  3},
  { name: 'A76i6', serialNumber:  4},
  { name: 'A7i6f', serialNumber: 5 },
  { name: 'Auif', serialNumber:6 },
  { name: 'At7uif', serialNumber:7 },
  { name: 'A76ti6', serialNumber: 8},
  { name: 'Fi76i', serialNumber: 9 },
  { name: 'Fgfku', serialNumber: 10 },
];
const Attendance = () => {

const location=useLocation()

const classnumber = location.state;

const [selectedSeats, setSelectedSeats] = useState(initialSeatState);
  const [teacherName, setteacherName] = useState('select teacher ')
  const [Students, setStudents] = useState()
  const [checkAttandance, setCheckAttandance] = useState(true)
  const [ModalIsOpen, setModalIsOpen] = useState(false)
const [msg, setMsg] = useState()
  const isSelected = (seat) => {

    return selectedSeats.some((s) => s.name === seat.name && s.serialNumber === seat.serialNumber);
  };

const markattandance=()=>
{
  console.log(selectedSeats);
  console.log(teacherName);

  MarkAttendance(selectedSeats,teacherName).then(data=>
    {
      Taken()
    })
}
function SelectTeacher(data)
{
 
console.log(data);
setteacherName(data)

}

const getallStudents=()=>
{
  getStudents(classnumber.class).then((data) => {
  console.log(data.data);
    setStudents(data.data);
  });
}

const Taken=()=>
{
  console.log('im running');
  TakenAttandance(classnumber.class).then(data=>
    {
console.log(data);
      setCheckAttandance(false)
    }).catch(data=>
      {
        setCheckAttandance(true)
    setMsg('Attendance taken')
    setModalIsOpen(true)
      })
}



useEffect(()=>
{
  Taken()
getallStudents()

},[])



  return (

<div>
<p className='font-bold text-4xl flex justify-center mt-2 mb-3'>class {classnumber.class}</p>

{checkAttandance? <div className='font-bold text-3xl mt-6 flex justify-center'>{msg}</div>: <div>
<div className="mb-4">
<TeacherDropdown SelectTeacher={SelectTeacher}  />
  </div>
<div className="flex flex-wrap justify-center">
      {Students&&Students.map((seat) => (
        <button
          key={`${seat.name}-${seat.serialNumber}`}
          className={classNames(
            'inline-block  w-16 h-15 bg-gray-200  mx-2 my-2',
            {
              'bg-green-500 text-white border-2': isSelected(seat),
              'bg-gray-200 cursor-pointer border-2  border-black': !isSelected(seat),
            },
          )}
          onClick={() => {
            if (isSelected(seat)) {
              setSelectedSeats(selectedSeats.filter((s) => s !== seat));
            } else {
              setSelectedSeats([...selectedSeats, seat]);
            }
          }}
        >
      <p className="">{seat.serialNumber}</p>
       
       <p className='text-xs '>{seat.name}</p>

        </button>
      ))}
    </div>



<div className='flex justify-center mt-7'>

<button onClick={markattandance} type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
  Submit</button>

</div>
</div>  }

{ModalIsOpen && <Confirmation data='your attandance has successfully submitted' setModalIsOpen={setModalIsOpen}/>}
</div>

    
  );
};

export default Attendance;
