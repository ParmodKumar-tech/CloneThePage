import React from 'react'
import { Phone,Heart,Star } from 'lucide-react'
import StartInterviewBtn from './StartInterviewBtn'
export default function RatingAndReviews() {
  return (
    <div className="space-y-6">
            <div className="my-2 bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ratings & Reviews</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="w-5 h-5 text-blue-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">248</span>
                  </div>
                  <p className="text-sm text-gray-600">Preps</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-5 h-5 text-pink-600 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">92%</span>
                  </div>
                  <p className="text-sm text-gray-600">Found helpful</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">81</span>
                  </div>
                  <p className="text-sm text-gray-600">Reviews</p>
                </div>
              </div>

            <StartInterviewBtn/>
            </div>

   </div>       
  )
}
