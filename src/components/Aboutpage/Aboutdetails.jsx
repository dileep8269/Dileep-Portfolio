import React from 'react'
import "../header.css"

const Aboutdetails = ({id,content,name}) => {
  return (
    <div>
      <ul className='w-full h-full flex justify-between flex-col gap-5'>
        <li className='contentabout text-xl font-Playwrite italic tracking-wide leading-9 text-justify text-orange-600' key={id}>{content}</li>
        <li className='writernameabout text-2xl font-Ubuntu leading-loose tracking-wide text-pink-800 mt-2'>{name}</li>
      </ul>
    </div>
  )
}

export default Aboutdetails
