import React from "react";
import "../../../styles/style.css";
import Example from "../../../components/Admin/PickElements/DatePicker";
function Table1() {


    const datas=[

        {
            name:'sambhu',
            present:["July 1, 1983 01:15:00","July 2, 1983 01:15:00","July 5, 1983 01:15:00","July 8, 1983 01:15:00","July 10, 1983 01:15:00"]
        },
        {
            name:'nandu',
            present:["March 2, 1983 01:15:00","July 1, 1983 01:15:00","July 5, 1983 01:15:00","July 8, 1983 01:15:00","July 10, 1983 01:15:00"]
        }
    
    ]

    

  function MyComponent(props) {
    const elements = [];
    for (let i = 0; i < props.count; i++) {
      elements.push(<th scope="col">{i}</th>);
    }
    return <tr>{elements}</tr>;
  }

const Studentpresent=(element)=>
{
let date=1;
let vairfy=false
const elem = [];

    for(let i=1;i<31;i++)
    {



for(let j=0;j<element.count.present.length;j++)
{

  const checkdate=new Date(element.count.present[j]).getDate()
const checkmonth=new Date(element.count.present[j]).getMonth()
console.log('month',checkmonth,'day',checkdate,'this is i',i);
if(checkmonth===6&&checkdate===i)
{
  console.log('its in');
  elem.push(<td>present </td>);
  vairfy=true
}

}
if(vairfy)
{
  vairfy=false
}
else
{
  elem.push(<td>absent </td>);

}


    }

    return (
      <tr>
   
        <th>{element.count.name}</th>
        {elem}
      </tr>
    );

}


  

  return (
<>
<Example/>
</>
  );
}

export default Table1;
