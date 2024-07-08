import React from 'react'

const Button = ({button,icon}) => {
    return (
        <div>
            <div>
                <button className='w-auto px-4 bg-teal-800 text-white rounded-full flex justify-center items-center ml-2 hover:bg-black transition-bg duration-300 ease-linear'>
                    <span className='w-full relative overflow-hidden flex py-4 flex-col gap-2 after:[""] after:w-0 after:h-0.5 after:bottom-2 after:rounded-lg after:bg-white after:absolute after:invisible hover:after:visible hover:after:w-[100%] after:transition-all after:duration-500 after:ease-linear'>
                        <span className='font-Playwrite'>
                            {button}{icon}
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Button
