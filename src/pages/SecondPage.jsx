import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EventRight } from '../components/EventRight'
import { EventLeft } from '../components/EventLeft'
import { CollectionRight } from '../components/CollectionRight'
import { CollectionLeft } from '../components/CollectionLeft'

export const SecondPage = () => {
  const [selected, setSelected] = useState(true)
  const onclickSelect = () => {
    setSelected(prevSelected => !prevSelected);
  }
  return (
    <div className='bg-[#15181B] text-white flex md:flex-row flex-col h-auto'>
      <section className='relative md:w-[53%]'>
        {selected ?
          <EventLeft /> :
          <CollectionLeft selected={selected} />
        }
        <div className='mt-[140px] absolute ml-10 inline-block rounded-full bg-[#404447]  text-xl'>
          <button onClick={onclickSelect} className={`${selected ? 'bg-[#6c7176]' : ''} px-10 py-4  rounded-full`}>Events</button>
          <button onClick={onclickSelect} className={`${!selected ? 'bg-[#6c7176]' : ''} px-6 py-4  rounded-full`}>Collections</button>
        </div>
      </section>
      <section className='bg-[#B9A0FF] w-[7%] hidden md:block'>
        <AnimatePresence>
          <div className='overflow-hidden h-[160vh]'>
            <motion.h1
              className='text-[#15181B] rotate_text m-[30px] font-sans h-100% font-bold text-4xl'
              style={{ whiteSpace: 'nowrap' }}
              initial={{ y: '-100%' }}
              animate={{ y: ['100%', '-100%'] }}
              transition={{
                y: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 16,
                  ease: "linear"
                }
              }}
            >
              Oasis Bus Tour, LJM Stadium, New Delhi * Collection live, live on ASTRIX.com
            </motion.h1>
          </div>
        </AnimatePresence>
      </section>
      <section className='md:w-[40%]'>
        {selected ?
          <EventRight /> :
          <CollectionRight />
        }
      </section>
    </div>
  )
}
