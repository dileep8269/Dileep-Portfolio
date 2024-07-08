import React from 'react'
import "../components/header.css"
import Aboutdetails from '../components/Aboutpage/Aboutdetails'
import Secondbox from '../components/Homepage/Secondbox'
import { box1content, box2content } from '../constant/Aboutpage/aboutpage'

const About = () => {
    return (
        <div>
            <div className='w-full pt-14 h-full bg-amber-50 flex justify-around items-center max-[768px]:flex-col'>
                <div className='w-1/2 flex justify-center items-center max-[768px]:w-full'>
                    {box1content.map((items) => (
                        <Secondbox key={items.id} img={items.img} />
                    ))}
                </div>
                <div className='w-1/2 flex flex-col gap-8 justify-center items-center max-[768px]:w-full'>
                <h1 className='headingabout text-5xl font-medium text-teal-800 font-Montserrat tracking-widest border-b-2 border-red-800 py-2 w-full uppercase max-[768px]:text-center'>About Me</h1>
                    <div className='w-full flex items-center max-[768px]:w-full pr-10 max-[768px]:px-2'>
                        {box2content.map((items) => (
                            <Aboutdetails key={items.id} content={items.content} name={items.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
