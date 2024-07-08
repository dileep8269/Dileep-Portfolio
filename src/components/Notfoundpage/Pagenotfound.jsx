import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div>
      <div className=' bg-gradient-to-br from-teal-800 to-pink-950 text-white py-5 w-full h-[100vh] flex justify-center items-center gap-5 flex-col'>
        <h1 className=' text-8xl uppercase animate-bounce font-semibold'>Sorry Boss</h1>
        <h2 className='text-3xl font-medium text-red-800'>404 Page Not Found</h2>
        <img className='rounded-lg w-96 shadow-neutral-100 shadow-lg transition-all duration-1000 ease-linear' src="manimage.avif" alt="mainimage.avif" />
        <p className='text-2xl'>I am working on this page and work is completed very soon so you can visit on this page.</p>
        <Link to={"/about"}><button type='submit' className='w-auto py-2 px-3 h-full hover:before:w-full relative uppercase bg-teal-800 before:contents-[""] before:w-0 before:h-full before:bg-black before:absolute z-10 before:top-0 before:left-0 before:right-0 cursor-wait before:-z-10 overflow-hidden rounded-xl before:transition-all before:duration-300 before:ease-linear'>go to back</button></Link>
      </div>
    </div>
  )
}

export default Pagenotfound
