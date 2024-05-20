import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Carousel = ({ imgObj, selected }) => {
  const images = Object.values(imgObj);
  const controls = useAnimation();
  const imageWidth = 390;
  const [centerIndex, setCenterInd] = useState(0);

 useEffect(() => {
  let isCancelled = false; 
  const sequence = async () => {
    for (let i = 0; i < images.length; i++) {
      if (isCancelled) return; 
      setCenterInd(i);
      await controls.start({ x: -(imageWidth * i) });
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    if (!isCancelled) {
      controls.set({ x: 0 });
    }
  };

  if (controls) {
    sequence();
  }

  return () => {
    isCancelled = true; 
    if (controls) {
      controls.stop();
    }
  };
}, [controls, images.length, selected]); 

  return (
    <div>
      <motion.div
        className="flex ml-[150px] gap-[30px]"
        initial={{ x: 0 }}
        animate={controls}
        custom={images.length}
      >
        {images.map((img, i) => (

          !selected ?
            (<div className="md:w-[380px] w-[300px] inline-block relative" key={i}>
              <motion.img
                src={img}
                className={`${i !== centerIndex ? 'shade' : ''}`}
                alt={`singer ${i + 1}`}
              />
              {i !== centerIndex && (<div className='absolute bottom-10 left-4'>
                <h1 className='font-bold text-5xl'>Event Name</h1>
                <h2 className='mt-6 text-3xl'>Location</h2>
              </div>)}
            </div>)
            :
            (<div className="md:w-[380px] w-[300px] inline-block" key={i}>
              <div>
                <h1 className='font-bold text-4xl'>Lunar Palace:</h1>
                <h2 className='text-2xl font-semibold'>(ft. Kayne west)</h2>
              </div>
              <motion.img
                src={img}
                className={`${i !== centerIndex ? 'shade' : ''}`}
                alt={`singer ${i + 1}`}
              />
            </div>)
        ))}
      </motion.div>
    </div>
  );
};
