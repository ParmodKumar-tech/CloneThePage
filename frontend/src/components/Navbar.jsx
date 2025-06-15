import React, { useState } from 'react'
import { Search,ChevronDown } from 'lucide-react'

export default function Navbar() {
    const [menuItems,setMenuItems]=useState(false);

    const handleMenuItems=()=>{
        setMenuItems(!menuItems);
    }



  return (
    <div className='w-full flex justify-between p-5 items-center'>
      
      <div className='flex gap-2 p-1'>
        
      <div 
      className="w-auto mr-5 md:hidden lg:hidden flex flex-col  gap-1 p-2 cursor-pointer rounded" 
      onClick={handleMenuItems}
      >
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </div>



        <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
         <span className="text-white font-bold text-lg">a</span>
        </div>
        <h1 className="text-xl md:text-2xl  font-semibold text-gray-900">apna</h1>
        
        <nav className={menuItems? "z-20 w-screen left-0 bg-white flex flex-col gap-5 items-start absolute h-auto  border top-20 p-5":"hidden lg:flex flex-wrap items-center mx-2 space-x-6  font-semibold"}>
                <div className="relative">
                  <button  className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Jobs</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <button className="flex items-center cursor-pointer space-x-2 text-blue-600 font-medium">
                    <span>Job Prep</span>
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                  </button>
                </div>
                <div className="relative">
                  <button className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-gray-900">
                    <span>Contests</span>
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                  </button>
                </div>
                <div className="relative">
                  <button  className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-gray-900">
                    <span>Degree</span>
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                  </button>
                </div>
                <div className="relative">
                  <button  className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Resume Tools</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {menuItems && <div className='flex flex-col gap-2 w-full '>
                <hr />
                <div className="relative">
                  <button  className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Contact us</span>
                    
                  </button>
                </div>


                <div className="relative">
                  <button  className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Download Apna App</span>
                  </button>
                </div>



                <div className="relative">
                  <button  className="flex items-center cursor-pointer space-x-1 text-gray-700 hover:text-gray-900">
                    <span>Login</span>
                    
                  </button>
                </div>
              
              </div>}

        </nav>
      </div>

      <div className='hidden md:flex space-x-2 p-1'>
        <div className='relative'>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs by title, company..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"
        />
        </div>
      </div>
 
      <div className='flex space-x-3'>
            <button className="text-sm ml-2 text-teal-600 cursor-pointer hover:text-teal-700">
                Employer Login
              </button>
              <button className="text-sm bg-teal-600 cursor-pointer mx-5 text-white px-6 py-2 rounded  hover:bg-white hover:text-green-500 hover:border border-green-500">
                Candidate Login
              </button>
      </div>

      
    
    </div>
  )
}
