import React from 'react'
import { Link, MessageCircle,Facebook,Linkedin,Twitter,Copy } from 'lucide-react'

export default function SharedWithFriends() {
  return (
    <div className="mb-36 md:block bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share with Friends</h3>
              
              <div className="flex space-x-3 mb-4">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </button>
              </div>

              <p className="text-center text-gray-600 text-sm mb-4">or copy link</p>
              
              <div className=" items-center space-x-2 flex flex-wrap">
                <input
                  type="text"
                  value="https://l.apna.co/8qS8X5YCbUb"
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button className="px-4 py-2 cursor-pointer border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Copy className="w-4 h-4 " />
                </button>
              </div>
            </div>
        

  )
}
