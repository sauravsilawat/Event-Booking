import React from 'react'
import logo from '../images/logo_yellow.png'
import e1 from '../images/e1.jpg'
import e2 from '../images/e2.jpg'
import e3 from '../images/e3.jpg'
import e4 from '../images/e4.jpg'
import e5 from '../images/e5.jpg'
import { Carousel } from './Carousel'

export const EventLeft = () => {
    
    const imgObj = { e1, e2, e3, e4, e5 };

    return (
        <div className='pt-[40px] overflow-hidden relative'>
            <img src={logo} className='relative w-[180px] ml-10' alt="logo" />
            <div className='md:mt-[120px] mt-[80px] ml-10 md:text-9xl text-8xl font-bold text-[#6c7176]'>
                <h1>ASTR <br /> IX</h1>
                <h1 className='mt-[100px]'>EV <br /> ENTS</h1>
            </div>
            <div className='absolute top-[240px] z-20'>
                <Carousel imgObj={imgObj} />
            </div>
        </div>
    )
}
