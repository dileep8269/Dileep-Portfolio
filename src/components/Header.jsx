import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
  const [navBgblur, setnavBgblur] = useState("backdrop-blur-0");

  useEffect(() => {

    const handlesetcolor = () => {
      if (window.scrollY > 0) {
        setnavBgblur("backdrop-blur-3xl")
      }
      else {
        setnavBgblur("backdrop-blur-0")
      }
    }

    window.addEventListener('scroll', handlesetcolor);

  }, [])




  return (
    <div className={`max-[768px]:hidden`}>
      <nav className={`z-30 text-base font-semibold ${navBgblur} w-full bg-transparent flex justify-between items-center fixed transition-all duration-300 ease-linear text-black`}>
        <div className="w-40 h-16 cursor-pointer ml-10">
          <img className='logo w-full h-full rounded-3xl' src="logo1.webp" alt="logo" />
        </div>
        <ul className="flex gap-10 cursor-pointer py-4 font-Playwrite uppercase px-2 mr-8">
          <Link to="/"><li className={`link1 hover:text-green-500 transition-text duration-200 ease-linear `}>Home</li></Link>
          <Link to="/about"><li className={`link2 hover:text-green-500 transition-text duration-200 ease-linear`}>About</li></Link>
          <Link to="/projects"><li className={`link1 hover:text-green-500 transition-text duration-200 ease-linear `}>Projects</li></Link>
          <Link to="/qualifications"><li className={`link2 hover:text-green-500 transition-text duration-200 ease-linear `}>Qualifications</li></Link>
          <Link to="/skills"><li className={`link2 hover:text-green-500 transition-text duration-200 ease-linear`}>Skills</li></Link>
        </ul>
      </nav>
    </div>

  )
}

export default Header
