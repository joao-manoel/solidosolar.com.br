import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type projectsType = {
  type: string
  title: string
  description: string
  images: string[]
}

interface GalleryProps {
  projects: projectsType[]
}

export const GalleryProject = ({ projects }: GalleryProps) => {
  
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
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab overflow-hidden"
    >

      <motion.div
        dragConstraints={{ right: 0, left: -width }}
        drag="x"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 flex-nowrap gap-2"
      >
        {projects.map((project, key) => (
          <motion.div key={key}
            className="m-w-[700px] bg-red-200"
          >
            <img 
              alt={project.title}
              src={project.images[0]}
              className=""
            />
          </motion.div>
        ))}

      </motion.div>

    </motion.div>
  )
}