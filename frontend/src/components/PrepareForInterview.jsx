import React, { act, useState } from 'react'
import { ChevronDown } from 'lucide-react';

export default function PrepareForInterview() {
    const [activeTab, setActiveTab] = useState('Technical');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const TechincalQuestions = [
    "How do you drive sales in a competitive market?",
    "What CRM tools have you used effectively?",
    "How do you manage a large sales team?",
    "Explain your approach to sales forecasting."
  ];

  const BehaviouralQuestions = [
    "Tell me about a time you resolved a team conflict.",
    "Describe a failure and what you learned from it.",
    "How do you handle pressure or stress?",
    "Give an example of a difficult decision you made."
  ];

  const MissionVisionQuestions = [
    "Why do you want to work at our company?",
    "How do your personal values align with ours?",
    "What motivates you long-term in your career?",
    "Where do you see yourself in 5 years?"
  ];

  const getQuestionsForTab=(tab,index)=>{
      if(activeTab ==='Technical') return TechincalQuestions;
      else if(activeTab === 'Behavioural') return BehaviouralQuestions;
      else return MissionVisionQuestions;
  }

  return (
    <div className="my-2 bg-white rounded-2xl p-8">
      <h1 className='text-2xl font-bold'> Prepare for the Interview</h1>
      <div className='flex gap-5 py-3 flex-wrap'>
      {['Technical','Behavioural', 'Mission-vision'].map((tab,index)=>(
        
        <button 
        key={index}
        onClick={()=>{setActiveTab(tab)}}
        className={` cursor-pointer px-4 py-2 rounded-full font-medium transition-colors 
          ${
          activeTab===tab? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        > 
        {tab}
        </button>
        
      ))}
      </div>

    <div className="space-y-4">

        {getQuestionsForTab().map((question, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">Q. {question}</span>
                      <ChevronDown className={`w-5 h-5 text-purple-700 transition-transform ${
                        expandedQuestion === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {expandedQuestion === index && (
                      <div className="px-4 pb-4 text-gray-700">
                        <p>This is where the detailed answer would appear...</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

    </div>
  )
}
