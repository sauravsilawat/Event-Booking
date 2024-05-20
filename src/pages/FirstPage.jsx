import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import logo from '../images/logo_black.png'
import one from '../images/12.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import six from '../images/6.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.jpg'


export const FirstPage = () => {

    return (
        <div className='bg-[#FFF4DF] pt-[40px] pb-4 h-full'>
            <img src={logo} className='w-[180px] ml-10' alt="logo" />
            <section className='flex justify-start items-center'>
                <div className='mt-[60px] flex flex-col gap-10 mx-[250px] h-[600px] text-6xl font-semibold'>
                    <p className='flex gap-4 items-center'>
                        WE <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '470px', '--end-width': '200px' }} src={eight} alt='p1' /> ORGANIZE THE
                    </p>

                    <p className='flex gap-4 items-center'>
                        CONNECTION <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '590px', '--end-width': '300px' }} src={four} alt='p2' />
                    </p>

                    <p className='flex gap-4 items-center'>
                        <img className='img-animation h-[70px] object-none' style={{ '--start-width': '150px', '--end-width': '390px' }} src={one} alt='p3' /> BETWEEN <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '100px', '--end-width': '90px' }} src={three} alt='p4' /> MUSIC
                    </p>

                    <p className='flex gap-4 items-center'>ARTIST
                        <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '150px', '--end-width': '130px' }} src={nine} alt='p5' /> CULTURE <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '350px', '--end-width': '100px' }} src={two} alt='p6' />
                    </p>

                    <p className='flex gap-4 items-center'>
                        ART & <img className='img-animation h-[70px] object-cover' style={{ '--start-width': '250px', '--end-width': '410px' }} src={six} alt='p7' /> COLLECTIONS
                    </p>
                </div>
            </section>
            <AnimatePresence>
                <div className=' w-full border border-t-[1px] mb-4 border-[#f6c6b6] mt-10'></div>
                <div className='overflow-hidden'>
                    <motion.h1
                        className='text-[#f6c6b6] font-crisis font-bold tracking-widest text-5xl'
                        initial={{ x: '-100%' }}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 10,
                                ease: "linear"
                            }
                        }}
                    >
                        CLICK ANYWHERE TO CONTINUE
                    </motion.h1>
                </div>
            </AnimatePresence>
        </div>
    )
}