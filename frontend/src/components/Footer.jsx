import React from 'react'
import {Facebook,Linkedin,Twitter,Instagram,Youtube}  from 'lucide-react'
export default function Footer() {
  return (
    <footer className="hidden md:flex bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">a</span>
                </div>
                <span className="text-2xl font-bold">apna</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Follow us on social media</h3>
              <div className="flex space-x-4">
                <Facebook className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
              </div>

              <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
              © 2025 Apna | All rights reserved &nbsp; | &nbsp;
              <a href="#" className="underline">Privacy Policy</a> &nbsp; | &nbsp;
              <a href="#" className="underline">Terms & Conditions</a>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-white my-auto m-10 text-black p-4 rounded-lg text-center">
          <h3 className="text-md font-semibold">Apply on the go</h3>
          <p className="text-sm text-gray-600">Get real time job updates on our App</p>
          <div className="flex justify-center mt-2 gap-4 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Googl_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Play Store"e
              className="h-8"
            />
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=https://play.google.com/store"
              alt="QR Code"
              className="h-16"
            />
          </div>
        </div>

      
      </footer>
  )
}
