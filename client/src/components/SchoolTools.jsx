import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SchoolData } from '../assets/assets';

const SchoolTools = () => {

    const navigate = useNavigate();
    const user = useUser();

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'>
      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>
            Manage your Immigration School With No Stress
        </h2>
        <p className='text-gray-500 max-w-lg mx-auto'>
            Find the Easiest Way to manage your Immigration School.
            Increase your revenu by simplifying your employees dayly work ...
        </p>
      </div>

      <div className='flex flex-wrap mt-10 justify-center'>
        {SchoolData.map((tool, index) => (
            <div 
                key={index} 
                className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100
                            hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                onClick={() => user && navigate (tool.path)}
            >
                <tool.Icon 
                    className='w-12 h-12 p-3 text-white transition-transform duration-300 rounded-xl hover:rotate-12'
                    style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}
                />
                <h3 className='mt-6 mb-3 text-lg font-semibold'>
                    { tool.title }
                </h3>
                <p className='text-gray-400 text-sm max-w-[95%]'>
                    { tool.description }
                </p>
           </div>
        ))}
      </div>
    </div>
  )
}

export default SchoolTools
