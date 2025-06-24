import React, { useEffect, useState } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { delemp, fetchemp } from '../store/EmpSlice';
import AddEditForm from '../components/AddEditForm';
import { toast } from 'react-hot-toast';  // Import react-hot-toast

const Employee = () => {
  const [searching, setsearching] = useState("")
  const [sort, setsort] = useState("")
  const [openmodel, setopenmodel] = useState(false)
  const [model, setmodel] = useState('add')
  const [selectedempdata, setselectedempdata] = useState(null)

  const dispatch = useDispatch()
  const employee = useSelector((state) => state.employee.employee)
  console.log(employee);

  useEffect(() => {
    dispatch(fetchemp());
  }, [])


  const empsearch = employee.filter(emp => {
    return emp.name.toLowerCase().includes(searching.toLowerCase()) ||
      emp.email.toLowerCase().includes(searching.toLowerCase()) ||
      emp.role.toLowerCase().includes(searching.toLowerCase()) ||
      emp.status.toLowerCase().includes(searching.toLowerCase()) ||
      emp.department.toLowerCase().includes(searching.toLowerCase()) ||
      emp.salary?.toString().includes(searching)
  })

  if (sort != "") {
    const sortfunction = {
      'name-asc': (a, b) => a.name.localeCompare(b.name),
      'name-desc': (a, b) => b.name.localeCompare(a.name),
      'salary-asc': (a, b) => a.salary - b.salary,
      'salary-desc': (a, b) => b.salary - a.salary,
    }
    empsearch.sort(sortfunction[sort])
  }

  const handeladd = () => {
    setmodel('add');
    setselectedempdata(null);
    setopenmodel(true)
  }

  const handeledit = (emp) => {
    setmodel('edit');
    setselectedempdata(emp);
    setopenmodel(true)
  }

  const handeldelete = async (emp) => {
    try {
      await dispatch(delemp(emp.id));
      toast.success('Employee deleted successfully!');  // Success toast
    } catch (error) {
      toast.error('Failed to delete employee.');  // Error toast
    }

  }

  const closemode = () => {
    setopenmodel(false)
  }

  return (
    <div className='bg-bgprimary p-10'>
      {/* title */}
      <div className='flex flex-col gap-3 sm:flex-row justify-between items-center font-bold  text-textsecondary'>
        <h1 className='text-3xl lg:text-4xl'>Our Employess</h1>
        <button className='btn w-auto p-2 text-xs lg:text-xl'
          onClick={handeladd}>Add Employee</button>
      </div>

      {/* serching ,sort , filter  */}
      <div className='flex justify-between items-center mt-3 gap-3 lg:mt-6 '>
        <input className='input flex-2 py-2 text-xs rounded-xl w-full lg:text-sm' type="text" placeholder='Serching Employe... '
          value={searching}
          onChange={(e) => setsearching(e.target.value)} />

        <select value={sort} onChange={(e) => setsort(e.target.value)} className='input py-2 text-xs rounded-xl lg:text-sm text-textsecondary flex-1'>
          <option value="">--SELECT--</option>
          <option value="name-asc">Name asc</option>
          <option value="name-desc">Name desc</option>
          <option value="salary-asc">Salary asc</option>
          <option value="salary-desc">Salary desc</option>
        </select>
      </div>


      {/* display data  */}
      <div className='overflow-x-auto mt-5 '>
        <table className='w-full whitespace-nowrap text-xs lg:text-sm m-auto rounded-sm text-center overflow-hidden bg-bgthird text-textthird  '>
          <thead>
            <tr className='border-b border-gray-300 bg-bgsecondary'>
              <th className='p-3'>NAME</th>
              <th className='p-3'>EMAIL</th>
              <th className='p-3'>ROLE</th>
              <th className='p-3'>SALARY</th>
              <th className='p-3'>STATUS</th>
              <th className='p-3'>PHONE</th>
              <th className='p-3'>DEPARTMENT</th>
              <th className='p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {empsearch.map((emp, index) => (
              <tr key={index} className='border-b border-gray-300 '>
                <td className='p-3'>{emp.name}</td>
                <td className='p-3'>{emp.email}</td>
                <td className='p-3'>{emp.role}</td>
                <td className='p-3'>{emp.salary}</td>
                <td className='p-3'>{emp.status}</td>
                <td className='p-3'>{emp.phone}</td>
                <td className='p-3'>{emp.department}</td>
                <td className='p-3 flex justify-center items-center gap-3'>
                  <div>
                    <button onClick={() => handeledit(emp)} className='w-auto py-1 px-2 text-textprimary sm:text-sm md:text-xl lg:text-2xl hover:bg-light hover:text-black rounded-sm'><FaUserEdit /></button>
                    <button onClick={() => handeldelete(emp)} className='w-auto py-1 px-2 text-red-700 sm:text-sm md:text-xl lg:text-2xl hover:bg-light rounded-sm'><MdDelete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <AddEditForm isopen={openmodel} onclose={closemode} mode={model} data={selectedempdata} />


    </div>
  )
}

export default Employee
