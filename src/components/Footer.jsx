import React from 'react'
import { box1datafooter, box2data1footer, box2data2footer, box3datafooter } from '../constant/Footerpagedata/footerdata'
import UlLicomponent from './allusecomponents/UlLicomponent'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className='w-full flex justify-center items-center flex-col gap-3 text-base pt-6  px-3 bg-black text-white'>
                <h1 className='text-2xl'>About Me</h1>
                <p className='containerskills max-[768px]:text-center'>Passionate web developer with experience in creating dynamic and responsive websites. Skilled in HTML, CSS, JavaScript, and various modern frameworks.</p>
                <div className='flex items-center w-full h-full rounded-3xl bg-teal-800 overflow-hidden py-3 my-3 max-[768px]:flex-col'>
                    <div className='flex w-1/3 rounded-3xl justify-center items-center flex-col p-4 gap-3 bg-slate-900 max-[768px]:w-full max-[768px]:rounded-sm'>
                        <h2 className='text-2xl'>Quick Links</h2>
                        <ul className='flex justify-center items-center flex-col'>
                            {box1datafooter.map((items) => (
                                <Link key={items.index} to={items.route}>
                                    <li className='link1 p-2'>
                                        <UlLicomponent linkcontent={items.linkdata} />
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='flex w-1/3 justify-center items-center flex-col p-4 gap-3 bg-slate-900 max-[768px]:w-full'>
                        <h2 className='text-2xl'>Contact Me</h2>
                        <div className='w-full h-full flex justify-center items-center'>
                            <ul className='flex justify-center flex-col gap-1'>
                                {box2data1footer.map((items) => (
                                    <Link key={items.index} to={items.route}>
                                        <li className='link2'>
                                            <UlLicomponent linkcontent={items.linkdata} />
                                        </li>
                                    </Link>
                                ))}

                            </ul>
                            <ul className='flex items-end flex-col gap-1'>
                                {box2data2footer.map((items) => (
                                    <Link key={items.index} target='_blank' to={items.route}>
                                        <li className='link1'>
                                            <UlLicomponent key={items.index} linkcontent={items.linkdata} />
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex w-1/3 rounded-3xl justify-center items-center flex-col p-4 gap-3 bg-slate-900 max-[768px]:w-full max-[768px]:rounded-sm'>
                        <h2 className='text-2xl'>Follow Me</h2>
                        <ul className='flex justify-center items-center flex-col gap-4 p-4 max-[768px]:flex-row max-[768px]:gap-10'>
                            {box3datafooter.map((items, index) => (
                                <Link key={items.index} target='_blank' to={items.route}>
                                    <i key={items.index} className='link2'>{items.icon}</i>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='contentabout mb-6 max-[768px]:text-center'>&copy; 2024 Dileep Tiwari (Web Developer). All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
