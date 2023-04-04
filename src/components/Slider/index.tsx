import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  images: StaticImageData[];
}

export const Slider = ({images}: SliderProps) => {

  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {

    if (carousel.current !== null) { 
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])
  
  return (
    <motion.div
        ref={carousel}
        whileTap={{cursor: "grabbing"}}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          className="flex items-center w-fit"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{duration: 0.8}}
        >

          {images.map((image, key) => (
            <motion.div
              className="item px-4 py-4 pointer-events-none min-w-[200px]"
              key={key}
            >
              <Image
                className="w-full"
                src={image}
                alt=""
              />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>    
  )
  
}