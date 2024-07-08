import React from 'react'

const Design1 = ({id,icon,iconname,data}) => {

    return (
        <div>
            <div className={`containerskills w-full h-auto flex flex-col`}>
                <span className='flex flex-col justify-center capitalize font-Playwrite px-3'>
                    <i>{icon}</i>
                    <i>{iconname}</i>
                    <ul className='flex items-center w-full h-2 rounded-lg bg-pink-950 relative'>
                        <li key={id} style={{width:`${data}%`}} className={`h-2 rounded-2xl bg-rose-500`}></li>
                        <li className='w-[40px] h-[40px] translate-x-[-5px] flex justify-center items-center text-xl bg-cyan-400 shadow-lg shadow-black rounded-[100%]'>{data}</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default Design1
