import React from 'react'
import logo from '../images/logo_yellow.png'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import c3 from '../images/c3.jpg'
import c4 from '../images/c4.jpg'
import c5 from '../images/c5.jpg'
import { Carousel } from './Carousel'

export const CollectionLeft = ({selected}) => {
    
    const imgObj = { c1, c2, c3, c4, c5 };

    return (
        <div className='pt-[40px] overflow-hidden relative'>
            <img src={logo} className='relative w-[180px] ml-10' alt="logo" />
            <div className='mt-[120px] ml-10 text-9xl font-bold text-[#6c7176]'>
                <h1>ASTR <br /> IX</h1>
                <h1 className='mt-[100px]'>EV <br /> ENTS</h1>
            </div>
            <div className='absolute top-[240px] z-20'>
                <Carousel imgObj={imgObj} selected={selected} />
            </div>
        </div>
    )
}
