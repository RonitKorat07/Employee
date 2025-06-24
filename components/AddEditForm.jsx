import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { addemp, editemp } from '../store/EmpSlice';
import {useDispatch} from 'react-redux';
import toast from 'react-hot-toast';

const AddEditForm = ({isopen , onclose , mode ,data}) => {
  if(!isopen) return null;
  const dispatch = useDispatch();
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    salary: '',
    status: '',
    phone: '',
    department: ''
  });

    useEffect(() => {
    if (mode === 'edit' && data) {
      setFormData(data);
    } else {
      setFormData({
        name: '',
        email: '',
        role: '',
        salary: '',
        status: '',
        phone: '',
        department: ''
      });
    }
  }, [mode, data]);

  const handelonchange = (e) => {
    const{name ,value} = e.target
    setFormData(prev=>({
      ...prev,
      [name] : value
    }))
  }

const handelsubmit = async (e) => {
  e.preventDefault();

  try {
    if (mode === 'add') {
      await dispatch(addemp(formData));
      toast.success("Employee added successfully");
    } else {
      await dispatch(editemp(formData));
      toast.success("Employee updated successfully");
    }
    onclose();

  } catch (error) {
    console.error("Error during form submission:", error);

    if (mode === 'add') {
      toast.error("Failed to add employee. Please try again.");
    } else {
      toast.error("Failed to update employee. Please try again.");
    }
  }
};


  return (
    <div>
      <div className=' bg-[rgba(0,0,0,0.5)] fixed inset-0 flex justify-center items-center z-10'>
        <div className='bg-bgsecondary relative w-64 mx-auto sm:w-md lg:w-xl overflow-y-auto max-h-[90vh] p-5'>
          <button className='absolute top-2 right-2 text-4xl text-light cursor-pointer' onClick={onclose}><IoMdClose/></button>
        <form onSubmit={handelsubmit} action="" className=''>
          <h3 className='text-center text-xl sm:text-3xl lg:text-4xl py-8 text-textthird'>{mode === 'add' ? 'Add Employee' : 'Edit Employee'}</h3>
              <input className='input' 
                     type="text" 
                     placeholder='Enter Your Name' 
                     name='name'  
                     value={formData.name}
                     onChange={handelonchange}
                     minLength={3}
                     required
              />
              <input className='input' 
                     type="email" 
                     placeholder='Enter Your Email' 
                     name='email' 
                     value={formData.email}
                     onChange={handelonchange}
                     required
              />
              <input  className= 'input' 
                      type='text' 
                      placeholder='Enter Your Role'
                      name='role' 
                      value={formData.role}
                      onChange={handelonchange}
                      required
              />
              <input  className= 'input' 
                      type='number' 
                      placeholder='Enter Your Salary'
                      name='salary'
                      value={formData.salary}
                      onChange={handelonchange}
                      required
              />
              <input  className= 'input' 
                      type='text' 
                      placeholder='Enter Your Status'
                      name='status'
                      value={formData.status}
                      onChange={handelonchange} 
                      required
              />
              <input  className= 'input' 
                      type='number'
                      placeholder='Enter Your Phone'
                      name='phone'
                      value={formData.phone} 
                      onChange={handelonchange}
                      required
              />
              <input  className= 'input' 
                      type='text' 
                      placeholder='Enter Your Department'
                      name='department'
                      value={formData.department} 
                      onChange={handelonchange}
                      required
              />

              <button type='submit' className='btn'>{mode=== 'add' ? 'Add Data' : 'Edit Data'}</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AddEditForm
