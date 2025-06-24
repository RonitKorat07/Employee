import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchemp } from '../store/EmpSlice';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const employee = useSelector(state => state.employee.employee); // adjust according to your store structure
  const activeemp = employee.filter(emp => emp.status === 'Active')
  const department = [... new Set(employee.map((emp) => emp.department))]
  useEffect(() => {
    dispatch(fetchemp());
  }, [])


  return (
    <div className='min-h-screen bg-bgprimary text-textsecondary flex flex-col justify-center items-center px-4 py-10'>
      {/* Welcome Section */}
      <div className='max-w-3xl text-center'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold sm:font-bold mb-6 '>Welcome to Employee Dashboard</h1>
        <p className='text-lg sm:text-xl lg:text-2xl text-textthird mb-8'>
          Manage your employees efficiently with powerful tools for search, sort, add and edit functionality.
        </p>
        <button
          onClick={() => navigate('/employee')}
          className='btn px-6 py-3 text-lg'>
          View Employees
        </button>
      </div>

      {/* Optional Stats Section */}
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl text-center'>
        <div className='bg-bgsecondary p-6 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold'>{employee.length}</h3>
          <p className='text-textthird'>Total Employees</p>
        </div>
        <div className='bg-bgsecondary p-6 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold'>{activeemp.length}</h3>
          <p className='text-textthird'>Total Active Employee</p>
        </div>
        <div className='bg-bgsecondary p-6 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold'>{department.length}</h3>
          <p className='text-textthird'>Total Department</p>
        </div>

      </div>
    </div>
  );
};

export default HomePage;