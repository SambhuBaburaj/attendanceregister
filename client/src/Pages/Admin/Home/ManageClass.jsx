import React, { useEffect, useState } from "react";
import { Classes, addClass } from "../../../API/AdminInstance";
import AdminInstance from "../../../API/Axios";
import Confirmation from "../../../components/Admin/Pop-up/Confirmation";
import RemoveClass from "../../../components/Admin/Pop-up/RemoveClass";

function ManageClass() {
  const [classes, setclasses] = useState();
  const [classname, setclassname] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [removeClass, setRemoveclass] = useState(false);
  const [classnumber, setclassnumber] = useState();
  const [err, seterr] = useState(false);
  const getdata = async () => {
    await Classes()
      .then((e) => {
        const  data  = e.data.classdata.sort((a, b) => {
            return a.Class - b.Class;
        });;
        console.log(data);
        setclasses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, [removeClass]);

  const addclass = (e) => {
    e.preventDefault();
    console.log(classname);
    if (classname) {
      addClass(classname).then((d) => {
        const { data } = d;
        console.log(data);
        if (data.res === 1) {
          setclassname('')

          getdata();
        } else {
          //it already exist
          setModalIsOpen(true);
        }
      });
    } else {
      seterr(true);
    }
  };

  return (
    <div className="bg-gray-500">
      <div className="h-screen ">
        <div className="flex justify-center h-full items-center">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Class
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {!classes ? (
                  <tr className="skeleton bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="skeleton px-6 py-4 font-semibold text-gray-900 dark:text-white"></td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ) : classes.length!=0 ? (
                  classes.map((value, key) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td
                          key={key}
                          className="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                        >
                          {value.Class}
                        </td>

                        <td className="px-6 py-4">
                          {/* <a
                            onClick={() => {
                              setRemoveclass(true);
                              setclassnumber(value.Class);
                            }}
                       
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Remove
                          </a> */}
                          <a
                            onClick={() => {
                              setRemoveclass(true);
                              setclassnumber(value.Class);
                            }}
                       
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    );
                  })
                ): <p className="text-end fontbold text-xl text to-blue-400">add a class to begin</p>
}
              </tbody>
            </table>
            <form>
              <div className="relative mt-5">
                {err && <p>insert a class</p>}
                <input
                  onChange={(e) => {
                    setclassname(e.target.value);

                    seterr(false);
                  }}
                  value={classname}
                  name="classname"
                  type="Number"
                  id="class"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Class"
                  required
                />
                <button
                  onClick={addclass}
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <Confirmation
          data="this class is already added"
          model={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      {removeClass && (
        <RemoveClass
          setRemoveclass={setRemoveclass}
          classnumber={classnumber}
        />
      )}
    </div>
  );
}

export default ManageClass;
