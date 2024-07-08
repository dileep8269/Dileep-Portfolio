import React from 'react'

const SkillshomeComponent = ({skillsimg,skillsheading,skillscontent}) => {
  return (
    <div className='relative overflow-hidden rounded-lg w-auto h-auto group mt-5'>
      <div className='w-80 h-80 rounded-lg'>
        <img className='w-full h-full object-cover' src={skillsimg} alt={skillsimg} />
      </div>
      <div className='w-80 h-80 absolute top-0 opacity-85 p-3 bg-rose-300 translate-y-96 group-hover:translate-y-0 flex justify-center gap-6 items-center flex-col transition-all duration-200 ease-linear'>
        <h2 className='text-pink-900 text-5xl font-Ubuntu text-center transition-all duration-1000 ease-linear'>{skillsheading}</h2>
        <p className='text-teal-800 text-base text-center font-Playwrite'>{skillscontent}</p>
      </div>
    </div>
  )
}

export default SkillshomeComponent
