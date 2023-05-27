import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface ContactButton {
  label: String
  Icon: IconType
  IconRotate: number
  onClick: () => void
}

export const ContactButton = ({label, Icon, onClick, IconRotate}: ContactButton) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <motion.div
                initial={{rotate: IconRotate}}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 90,
                  borderRadius: "100%"
                }}
                
                className="w-16 h-16 flex items-center justify-center relative"
              >
              <button
                  onClick={onClick}
                  className="
                  z-10 rounded-full w-11/12 h-11/12 bg-white text-2xl py-4 px-4 text-green-400"
                >
                  <Icon />
                </button>
                <motion.div
                  className="w-full h-full absolute border-dotted border-2 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["100%"]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                ></motion.div>
              </motion.div>

              <span
                className="text-lg font-thin text-white font-inter"
              >{label}</span>
            </div>
  )
}