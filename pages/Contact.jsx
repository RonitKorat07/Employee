import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit handler
  const handelonsubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: ''
    });
  };

  return (
    <div>
      <div className='bg-bgsecondary p-4 m-10 w-72 sm:w-sm md:w-xl lg:w-2xl mx-auto rounded-xl'>
        <form onSubmit={handelonsubmit}>
          <h3 className='text-center text-xl sm:text-3xl lg:text-4xl py-8 text-textthird'>Contact Our Team's</h3>
          
          <input
            className='input'
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className='input'
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className='input'
            type='number'
            placeholder='Enter Your Number'
            name='contact'   // lowercase to match state key
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <textarea
            className='input'
            name="message"
            placeholder='Enter Message Here...'
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
