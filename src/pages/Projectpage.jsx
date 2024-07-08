import React from 'react'
import Projects from '../components/Homepage/Projects'
import { carddata } from '../constant/Projectpage/projectpage'

const Projectpage = () => {
    return (
        <div>
            <div>
                <div className='w-full h-full py-16 flex justify-center flex-col bg-amber-50'>
                    <h1
                        className='headingprojects font-Montserrat mx-5 max-[768px]:text-center inline text-5xl text-start py-3 pt-6 border-b-2 border-pink-800 text-teal-800 font-medium tracking-widest uppercase'>
                        Latest Pojects
                    </h1>
                    <div className=' w-full h-full flex justify-evenly flex-wrap'>
                        {carddata.map((items) => (
                            <Projects key={items.id} img={items.img} projectname={items.projectname} content={items.content} button={items.button} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectpage
