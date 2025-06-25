import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menuopen, setmenuopen] = useState(false)

  return (
  <>
  
    <div className='flex flex-col justify-center gap-5 px-4 p-2 sticky top-0 z-1 sm:justify-between sm:items-center sm:flex-row bg-bgthird text-textprimary min-h-12'>
         <div className='flex justify-between items-center' >
                    <h3 className="text-xl">EMP MANAGEMENT</h3>

                    {/* Hamburger button for mobile */}
                    <div className='sm:hidden' onClick={() => setmenuopen(!menuopen)}>
                        <button className='text-3xl'>
                            {menuopen ? 'X' : '☰'}
                        </button>
                    </div>
         </div>
    
        <ul className={`flex flex-col gap-3 sm:flex-row sm:gap-5 ${menuopen ? 'flex' : 'hidden'} sm:flex`}>
        <li className='hover:text-lighthover cursor-pointer' onClick={() => setmenuopen(false)} >
            <Link to="/"> Home </Link>
        </li>
        <li className='hover:text-lighthover cursor-pointer' onClick={() => setmenuopen(false)} >
            <Link to="/employee"> Employee </Link>
        </li>
        <li className='hover:text-lighthover cursor-pointer' onClick={() => setmenuopen(false)} >
            <Link to="/contact"> Contact </Link>
        </li>
         </ul>
    </div>
   </>
  )
}

export default Navbar
