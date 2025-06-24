import React from 'react'

const Footer = () => {
  return (
    <div className='bg-bgsecondary text-textprimary p-5'>
      <div className=" grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:px-30 gap-5 mx-auto">
        {/* Company Section */}
        <div>
          <h3 className="text-lg mb-1">Company</h3>
          <ul className="text-textthird space-y-1 cursor-pointer">
            <li className='hover:text-light'>About Us</li>
            <li className='hover:text-light'>Our Service</li>
            <li className='hover:text-light'>Privacy Policy</li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-lg mb-1">Get Help</h3>
          <ul className="text-textthird space-y-1 cursor-pointer">
            <li className='hover:text-light'>FAQs</li>
            <li className='hover:text-light'>Support</li>
            <li className='hover:text-light'>Terms of Service</li>
            <li className='hover:text-light'>Contact Us</li>
          </ul>
        </div>

        {/* Our Pages Section */}
        <div>
          <h3 className="text-lg mb-1">Our Pages</h3>
          <ul className="text-textthird space-y-1 cursor-pointer">
            <li className='hover:text-light'>Home</li>
            <li className='hover:text-light'>About</li>
            <li className='hover:text-light'>Contact</li>
            <li className='hover:text-light'>Employee Portal</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg mb-1">Follow Us</h3>
          <ul className="sm:flex gap-1 text-textthird space-y-1 cursor-pointer">
            <li className='hover:text-light'>Facebook</li>
            <li className='hover:text-light'>Twitter</li>
            <li className='hover:text-light'>LinkedIn</li>
            <li className='hover:text-light'>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-textthird">
        <p>&copy; Employee Management System. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
