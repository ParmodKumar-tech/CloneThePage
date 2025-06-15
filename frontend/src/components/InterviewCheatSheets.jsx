import React from 'react'
import {Lock} from 'lucide-react';
export default function InterviewCheatSheets() {
  return (
                <div className="my-2 bg-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Personalised Interview Cheatsheets</h2>
              <p className="text-gray-600 mb-6">Based on your profile</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <h3 className="font-semibold text-gray-900 mb-2">Question: Tell me about a time when you had to solve a complex problem.</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    At my previous role at XYZ Corp, I was tasked with developing our customer retention...
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-purple-600 font-semibold">Locked</p>
                      <p className="text-sm text-gray-600 mt-2">
                        This will get unlocked after your interview is completed.
                      </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 opacity-30">Question: How would you design a distributed cache system?</h3>
                  <p className="text-sm text-gray-600 opacity-30">
                    When designing a distributed cache system, I would start by...
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-purple-600 font-semibold">Locked</p>
                      <p className="text-sm text-gray-600 mt-2">
                        This will get unlocked after your interview is completed.
                      </p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 opacity-30">Question: How would you design a distributed cache system?</h3>
                  <p className="text-sm text-gray-600 opacity-30">
                    When designing a distributed cache system, I would start by...
                  </p>
                </div>
              </div>
            </div>

  )
}
