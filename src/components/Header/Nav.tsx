import Link from "next/link"
import { useState } from "react"

import {
  HiClipboardCheck,
  HiHome,
  HiMenu,
  HiOutlineBadgeCheck,
  HiPresentationChartBar,
  HiX
} from "react-icons/hi"
import { Button } from "../Button"

export const Nav = () => {

  let Links = [
    {
      name: 'Home',
      url: '/',
      icon:  HiHome
    },
    {
      name: 'Sobre Nós',
      url: '/',
      icon: HiOutlineBadgeCheck
    },
    {
      name: 'Serviços',
      url: '/',
      icon: HiPresentationChartBar
    },
  ]

  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}className="text-4xl absolute right-8 top-10 cursor-pointer md:hidden">
        {isOpen ? <HiX /> : <HiMenu />}
      </div>
      <nav
        className={`
          md:flex md:items-center 
          gap-4 py-5 md:py-0 absolute md:static
          bg-white md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9
          transition-all duration-500 ease-in
          shadow-lg md:shadow-none ${isOpen ? 'top-24' : 'top-[-490px]'}
        `}
      > {/**ul */}
        {Links.map((link, index) => (
          <div className="text-xl hover:text-green-400 
            duration-500 md:hover:bg-green-50
            rounded-sm md:hover:shadow-md py-2 px-1 md:my-0 my-2"
            key={index}
          >
            <Link
              href={link.url}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-500"
            >
              {link.icon && <link.icon />}
              <span>{link.name}</span>
            </Link>
            
          </div>
        ))}
        <Button>
          <HiClipboardCheck />
          <span>Faça seu Orçamento</span>
        </Button>
      </nav>
    </>
  )
}