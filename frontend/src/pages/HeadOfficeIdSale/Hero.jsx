import React from 'react'

export default function Hero() {
  return (
          <div className="my-2 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/90 to-purple-600/90"></div>
              <div className="relative z-10 flex items-center space-x-6">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">i</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Head of Field Sales</h1>
                  <p className="text-xl opacity-90">at ICICI Bank</p>
                </div>
              </div>
            </div>

  )
}
