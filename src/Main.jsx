import React, { useState } from 'react'
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'
import { motion, AnimatePresence } from "framer-motion"

export const Main = () => {
  const [clicked, setClicked] = useState(false);

  const clickEvent = () => {
    setClicked(!clicked);
  }

  return (
    <div>
      <AnimatePresence>
        {!clicked && (
          <motion.div
            key="firstpage"
            exit={{ y: -1000 }}
            transition={{ duration: 1 }}
            className="cursor-pointer z-10"
            onClick={clickEvent}
          >
            <FirstPage />
          </motion.div>
        )}

        {clicked && (
          <motion.div
            key="secondpage"
            initial={{ zIndex: -1 }}
            animate={{ zIndex: 0 }}
            exit={{ zIndex: -1 }}
            transition={{ zIndex: { delay: 1 } }}
            className="absolute inset-0"
          >
            <SecondPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
