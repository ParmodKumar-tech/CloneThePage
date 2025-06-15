import React from 'react'

export default function AfterThisInterview() {
  return (
      <div className="my-2 bg-white rounded-2xl p-8">
      <h1 className='text-2xl font-bold my-2'>After this interview, You'll get</h1>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">Get an Interview Score and Rating amongst all the candidates</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">Detailed Analysis and Feedback on how the interview went</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">Question wise tips to improve your answers and deliver next time</p>
                </div>
              </div>
            </div>

  
  )
}
