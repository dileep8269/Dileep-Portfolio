import React from 'react'

const Projects = ({ id, img, projectname, content, button }) => {
  return (
    <div className='mt-3'>
      {/* cardprojects */}
      <div className='w-80 h-64 rounded-xl mt-7 cursor-pointer overflow-hidden relative group justify-center flex items-center hover:scale-95 transition-all duration-800 ease-linear'>
        <div className='w-full h-full flex justify-center items-center visible'>
          <img key={id} className='w-full h-full object-cover' src={img} alt="project1" />
        </div>
        <ul className='w-full absolute group-hover:translate-y-0 -translate-y-80 h-full flex flex-col opacity-85 bg-black gap-3 px-3 justify-center items-center transition-all duration-2000 ease-linear'>
          <li className='text-3xl font-bold text-center font-Ubuntu text-yellow-500'>{projectname}</li>
          <li className='text-base font-Playwrite text-center text-white'>{content}</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
