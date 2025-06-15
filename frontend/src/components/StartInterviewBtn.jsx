import React from 'react'

export default function StartInterviewBtn() {
  return (
    <div className='bottom-0 left-0 w-full fixed md:static bg-white rounded-xl p-3'>
    
    <div className=" bg-blue-50 rounded-lg p-3 mb-6">
    <p className="text-blue-700 text-sm font-medium">10 mins Interview slot available</p>
    </div>

    <button className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
    Start Interview
    </button>
    </div>
  )
}
