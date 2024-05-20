import React from 'react'
import location from '../images/location.png'
import clock from '../images/clock.png'
import s1 from '../images/singer1.jpg'
import s2 from '../images/singer2.jpg'
import s3 from '../images/singer3.jpg'
import qr from '../images/qr.png'

export const EventRight = () => {
    return (
        <div className='px-12'>
            <h2 className='font-semibold text-3xl mt-[60px]'>Explore Your First <br /> Event</h2>
            <h1 className='font-bold md:text-6xl text-4xl md:mt-[60px] mt-[100px]'>Event Name</h1>
            <div className='flex md:flex-row flex-col mt-[30px] gap-6 md:items-center items-start font-semibold text-2xl'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img src={location} className='w-[21px]' alt="location" />
                    </div>
                    <h2>Venue</h2>
                </div>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img src={clock} className='w-6' alt="clock" />
                    </div>
                    <h2>19/05/2024 @ 19:00</h2>
                </div>
                <div></div>
            </div>
            <p className='mt-[30px] font-semibold md:pr-[150px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nam cum, vitae et ea porro error odit laboriosam.</p>

            <h2 className='mt-[30px] font-semibold text-2xl'>Artist Lineup</h2>
            <div className='flex items-center mt-[50px]'>
                <img src={s1} className=' w-[80px] h-[80px] md:w-[200px] md:h-[200px] rounded-l-lg object-cover' alt="singer1" />
                <img src={s2} className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-lg object-cover' alt="singer1" />
                <img src={s3} className=' w-[80px] h-[80px] md:w-[200px] md:h-[200px] rounded-r-lg object-cover' alt="singer1" />
            </div>
            <div className='flex md:flex-row flex-col md:gap-0 gap-4 md:mt-[150px] mt-[100px] mb-10 justify-between'>
                <div>
                    <img src={qr} className='w-[120px]' alt="qr" />
                    <h1>scan for resume</h1>
                </div>
                <div className='flex items-end md:mt-0 mt-6'>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1xoPvF5VWCY6MuEfFdz3W1KwyIVQb_9JO/view?usp=sharing">
                        <button className=' font-bold px-6 py-2 rounded-full text-3xl bg-[#c2df4e] text-[#15181B]'>
                            Join Waitlist
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
