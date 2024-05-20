import React from 'react'
import reaction from '../images/reaction.png'
import collectible from '../images/collectible.png'

export const CollectionRight = () => {
    return (
        <div>
            <div className='px-12'>
                <h2 className='font-semibold text-3xl mt-[60px]'>Explore Your First <br /> Collecible</h2>
                <h1 className='font-bold text-6xl mt-[60px]'>Meta Lives</h1>
                <h2 className='mt-[30px] font-semibold text-2xl'>Live in Astrix</h2>
                <p className='mt-[15px] font-semibold pr-[150px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, nam cum, vitae et ea porro error odit laboriosam.</p>

                <div className='flex mt-[30px] items-center gap-2'>
                    <img src={reaction} className='w-[200px]' alt="" />
                    <h2 className=' text-xl font-semibold'>22k people interested</h2>
                </div>

                <h2 className='mt-[30px] font-semibold text-xl'>Artist Lineup</h2>
                <div className='flex items-center cursor-pointer gap-8 overflow-x-scroll mt-[40px]'>
                    <img src={collectible} className=' w-[200px] h-[250px] rounded-lg object-cover' alt="singer1" />
                    <img src={collectible} className=' w-[200px] h-[250px] rounded-lg object-cover' alt="singer1" />
                    <img src={collectible} className=' w-[200px] h-[250px] rounded-lg object-cover' alt="singer1" />
                </div>
                <div className='flex mt-[100px] mb-10 justify-end'>
                    <div className='flex items-end'>
                        <a target="_blank" href="https://drive.google.com/file/d/1xoPvF5VWCY6MuEfFdz3W1KwyIVQb_9JO/view?usp=sharing">
                            <button className=' font-bold px-6 py-2 rounded-full text-3xl bg-[#c2df4e] text-[#15181B]'>
                                Join Waitlist
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
