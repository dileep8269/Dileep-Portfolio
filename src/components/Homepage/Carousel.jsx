import React from 'react'

const Carousel = ({ index, img, projectname, projectdescription, projectbutton }) => {
    return (
        <div>
            <div className='w-full h-full flex justify-center items-center gap-3 text-center px-6 text-white py-3 mb-5'>
                <div index={index} className='w-[400px] h-[500px] gap-1 text-white flex flex-col items-center bg-cyan-400 rounded-lg p-4 max-[768px]:w-[80vw]'>
                    <img className='w-full object-cover rounded-lg h-[250px]' src={img} alt={img} />
                    <div className='w-full h-full flex justify-center items-center flex-col gap-1'>
                        <h1 className='text-2xl text-red-800 font-medium font-Ubuntu'>{projectname}</h1>
                        <p className='my-3 text-black font-Playwrite'>{projectdescription}</p>
                        <button className='text-blue-800 uppercase relative before:transition-all before:duration-500 py-1 before:rounded-lg before:bottom-0 before:[""] before:absolute before:w-0 before:h-1 before:z-20 hover:before:w-full
                    after:w-full after:h-0.5 after:bottom-0 after:z-10 after:absolute after:bg-pink-900 after:left-0'>{projectbutton}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
