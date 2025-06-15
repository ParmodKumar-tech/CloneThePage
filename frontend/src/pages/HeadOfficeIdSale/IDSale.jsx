import React from 'react'
import Hero from './Hero'
import AboutThisInterview from '../../components/AboutThisInterview'
import InterviewCheatSheets from '../../components/InterviewCheatSheets'
import PrepareForInterview from '../../components/PrepareForInterview'
import AfterThisInterview from '../../components/AfterThisInterview'
import RatingAndReviews from '../../components/RatingAndReviews'
import SharedWithFriends from '../../components/SharedWithFriends'

export default function IDSale() {
  return (
    <div className='bg-[#e3cff5] w-full flex flex-wrap md:justify-center p-4'>
      <div className='w-[100%] lg:w-[70%] p-2'>
      <Hero/>
      <AboutThisInterview/>
      <InterviewCheatSheets/>
      <PrepareForInterview/>
      <AfterThisInterview/>
      </div>
      
      <div className='p-3 w-[100%] lg:w-[30%]'>
      <RatingAndReviews/>
      <SharedWithFriends/>
      </div>
    </div>
  )
}
