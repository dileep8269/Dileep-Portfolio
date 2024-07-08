import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const ResponsiveHeader = () => {

    const [display, setdisplay] = useState("hidden")
    const [bgdisplay, setbgdisplay] = useState("border-none")

    const handleclick = () =>{
        if(`${display}`=== "hidden"||`${bgdisplay}`=== "none"){
            setdisplay("block")
            setbgdisplay("border-white")
        }
        else{
            setdisplay("hidden")
            setbgdisplay("border-none")
        }
    }

    return (
        <div>
            <nav className='w-full fixed z-20 text-pink-950 font-bold tracking-widest hidden max-[768px]:block'>
                <section className='shadow-lg shadow-black w-full bg-black py-1 flex justify-between items-center'>
                    <div className='w-20'>
                        <img className='rounded-lg' src="logo1.webp" alt="logo1.webp" />
                    </div>
                    <span className={`${bgdisplay} cursor-pointer w-8 h-8 mr-4 border-2 justify-between p-1 rounded-lg flex flex-col items-center gap-2`} onClick={handleclick}>
                        <faBars className="text-red-800" />                   
                    </span>
                </section>
                <ul className={`${display} py-5 backdrop-blur-md text-base rounded-b-3xl flex flex-col gap-3 px-7 transition-all duration-300 ease-linear`}>
                    <Link to="/"><li className='w-full hover:scale-95 transition-all duration-300 py-1 ease-linear'>Home</li></Link>
                    <Link to="/about"><li className='w-full hover:scale-95 transition-all duration-300 ease-linear'>About</li></Link>
                    <Link to="/skills"><li className='w-full hover:scale-95 transition-all duration-300 ease-linear'>Skills</li></Link>
                    <Link to="/projects"><li className='w-full hover:scale-95 transition-all duration-300 ease-linear'>Projects</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default ResponsiveHeader
