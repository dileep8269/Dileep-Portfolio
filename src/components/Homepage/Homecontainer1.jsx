import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container1 } from '../../constant/homepagecontent/container2';
import Button from './Button';

const Homecontainer1 = () => {
    return (
        <div>
            {Container1.map((item) => (
                <div className='flex justify-center items-center w-full h-full py-10 pt-16 px-10 max-[768px]:flex-col max-[768px]:gap-10'>
                    <div className='w-1/2 h-full flex flex-col gap-9 justify-center max-[768px]:w-full max-[768px]:items-center'>
                        <h1 className='text-8xl font-medium text-teal-800 max-[768px]:text-[15vw] max-[768px]:text-center' key={item.id}>{item.Firstname}<span className='text-orange-600'>{item.Lastname}</span></h1>
                        <p className='text-2xl px-3 tracking-wider'>{item.content}</p>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center max-[768px]:w-full'>
                        <img className=' object-cover w-[100vw] has-[60vw]: max-[768px]:w-[100vw] max-[768px]:h-[60vw]' src={item.img} alt={item.img} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Homecontainer1
