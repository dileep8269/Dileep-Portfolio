import React, { useEffect } from 'react'
import Firstbox from '../components/Homepage/Firstbox'
import Secondbox from '../components/Homepage/Secondbox'
import Carousel from '../components/Homepage/Carousel'
import FormContact from '../components/form/FormContact'
import SkillshomeComponent from '../components/Homepage/SkillshomeComponent'
import { container1content, container2content, maincontainer2content, skillsdataimg } from "../constant/Homepage/homepage";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Aos from 'aos'
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-amber-50'>
            <div className='z-10 w-full h-full pt-14 flex justify-around items-center max-[768px]:flex-col max-[768px]:text-center bg-cover bg-center bg-fixed'>
                <div className='w-1/2 h-full max-[768px]:w-full'>
                    {container1content.map((items) => (
                        <Firstbox key={items.id} Firstname={items.Firstname} Lastname={items.Lastname} content={items.content} button={items.button} icon={items.icon} route={items.route} />
                    ))}
                </div>
                <div className='w-1/2 h-full max-[768px]:w-full'>
                    {container2content.map((items) => (
                        <Secondbox img={items.img} />
                    ))}
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='w-full h-full flex flex-col justify-center items-center py-5'>
                    <h1 data-aos="zoom-in" data-aos-duration="500" className='text-5xl relative text-fuchsia-500 font-Montserrat font-medium w-full border-b-2 border-black text-center drop-shadow-2xl py-2 h-full'>Projects</h1>
                    <div className='w-full h-full py-10 flex justify-center items-center'>
                        <Swiper
                            modules={[FreeMode, Pagination, Navigation, Autoplay]}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                            freeMode={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                200:{
                                    slidesPerView:1
                                },
                                650:{
                                    slidesPerView:2
                                },
                                800:{
                                    slidesPerView:3
                                }
                            }}
                        >
                            {maincontainer2content.map((items) => (
                                <SwiperSlide>
                                    <Carousel key={items.index} img={items.img} projectname={items.projectname} projectdescription={items.projectdescription} projectbutton={items.projectbutton} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='w-full h-full text-white flex justify-center items-center py-3 gap-3 flex-col'>
                    <h1 data-aos="zoom-in" className='py-2 text-center w-full text-5xl font-Montserrat font-medium border-b-2 border-black text-fuchsia-500 '>My Skills</h1>
                    <div className='w-full h-full flex justify-around items-center flex-wrap'>
                        {skillsdataimg.map((items) => (
                            <SkillshomeComponent key={items.index} skillsimg={items.skillsimg} skillsheading={items.skillsheading} skillscontent={items.skillscontent} />
                        ))}
                    </div>
                </div>
                <div className='w-full h-full flex justify-center items-center flex-col text-white py-3'>
                    <h1 data-aos="zoom-in" className='w-full py-2 text-5xl font-Montserrat font-medium border-b-2 text-fuchsia-500  border-black text-center'>Contact</h1>
                    <div className='w-full h-full flex justify-between items-center max-[768px]:flex-col'>
                        <div className='w-full h-full text-black max-[768px]:w-full'>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}






export default Home
