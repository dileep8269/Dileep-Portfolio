import React from 'react'
import Design1 from '../components/Skills/Design1'
import Design2 from '../components/Skills/Design2'
import { skilldata, skillimg } from '../constant/Skillspage/skillpage'

const Skillpage = () => {
    return (
        <div>
            <div className='flex pt-9 px-4 h-full bg-amber-50 w-full items-center gap-3 justify-around max-[768px]:flex-col'>
                <div className='w-1/2 gap-8 h-full items-center flex flex-col justify-center text-white max-[768px]:w-full'>
                    <h1 className='headingskills w-full font-medium text-teal-800 font-Montserrat tracking-widest text-5xl border-b-2 text-end border-red-700 p-3 max-[768px]:text-center max-[768px]:translate-y-0'>
                        My Skills
                    </h1>
                    <div className='w-full h-full translate-y-[-20px] flex flex-col justify-center gap-3 text-pink-800 max-[768px]:w-full'>
                        {skilldata.map((items) => (
                            <Design1 key={items.id} iconname={items.iconname} icon={items.icon} data={items.data} />
                        ))}
                    </div>
                </div>
                <div className='w-1/2 h-[100vh] flex flex-col justify-center gap-10 text-white max-[768px]:w-[90vw] max-[768px]:h-full max-[768px]:mt-4'>
                    {skillimg.map((items) => (
                        <Design2 key={items.id} img={items.img} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skillpage
