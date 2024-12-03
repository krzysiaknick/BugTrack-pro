"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
    return (

        

        <div style={{ textAlign: 'center' }}>
            
            <div className='home-page-headers'>
            <h1 className='home-header'>Welcome to BugTrack Pro!</h1>
            <p className='home-paragraph'>
                Cycle through the pages below to learn more 
                <br />
                about debugging in React:
            </p>
            <br />
            <br />
            <br />
            </div>
            {/* Custom navigation buttons */}
            <div className="swiper-navigation">
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
            </div>

            {/* Swiper Component */}
            <Swiper
                
                loop={true}
                breakpoints={{


                    320: {
                        slidesPerView: 1,
                        spaceBetween: 300,
                      },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 100,
                    },
                    
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                  }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }} // Pass custom navigation buttons
                
                modules={[Navigation]} // Add Navigation module
                style={{ padding: '1rem' }}
            >
                {buttons.map((button, index) => (
                    <SwiperSlide key={index}>
                        <Link href={button.href}>
                            <button
                                className="button"
                                style={{
                                    backgroundImage: `url(${button.img || '/default-image.png'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '60%',
                                    backgroundPosition: 'center',
                                   
                                }}
                            >
                                {button.label}
                            </button>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const buttons = [
    { href: '/about', label: 'About', img: '/cardImages/question.png' },
    { href: '/contact', label: 'Contact', img: '/cardImages/contact.png' },
    { href: '/reactDevTools', label: 'React Dev Tools', img: '/cardImages/react.png' },
    { href: '/consoleLog', label: '', img: '/cardImages/console-log.png' },
];

