import React from 'react'
import Button from "./Button"
import "../header.css"
import { Link } from 'react-router-dom'
import { FirstBoxicon } from '../../constant/Homepage/homepage'

const Firstbox = ({ id, Firstname, Lastname, content, button, icon, route }) => {
    return (

        <div>
            <div className='flex justify-center items-center w-full h-full py-10 pt-16 px-10 max-[768px]:flex-col max-[768px]:gap-10'>
                <div className='w-full h-full flex flex-col gap-7 justify-center max-[768px]:w-full max-[768px]:items-center'>
                    <span className='text-8xl font-medium text-teal-800 max-[768px]:text-[15vw]'>
                        <h1 className='inline font-Ubuntu' key={id}>{Firstname}</h1>
                        <span className='text-orange-600'>{Lastname}</span>
                    </span>
                    <p className='content text-2xl px-3 tracking-wider font-Playwrite'>{content}</p>
                    <ul className='w-full flex justify-between px-2 items-center max-[768px]:w-full'>
                        {FirstBoxicon.map((items) => (
                            <Link to={items.HomeFroute} target='_blank' rel='noreferrer'>
                                <li className='w-auto h-auto hover:scale-125 transition-all duration-150 ease-linear grayscale-[10] hover:grayscale-0'>
                                    <img src={items.HomeFicon} alt={items.HomeFicon} className={items.HomeFclass} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Link to={route}>
                        <Button button={button} icon={icon}></Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Firstbox
