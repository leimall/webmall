'use client'; // 需要在客户端执行
import { FaTruck } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react";
import { SHIPPING_INFO } from "@/utils/seo_keywords";
const FreeShipping = () => {
    const [index, setIndex] = useState(0)
     const words = [
      `${SHIPPING_INFO}`,
      ` ${SHIPPING_INFO}`,
      `${SHIPPING_INFO}`,
      ` ${SHIPPING_INFO}`,
    ]

    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
      }, 3000)
      // Clean up interval on unmount
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="bg-bg-100 p-2 w-full">
        <div className="relative mx-auto max-w-c-1440 items-center align-items:flex-center flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <FaTruck className="text-xl text-primary-500" />
            <span className="text-md text-text-three font-bold">
              <AnimatePresence mode="wait">
                <motion.p
                  key={words[index]}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 80 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </span>
          </div>
        </div>
      </div>
    )
  };

  export default FreeShipping;