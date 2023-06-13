import Link from "next/link";
import { useState } from "react";

import {
  HiClipboardCheck, HiFlag, HiHome,
  HiMenu,
  HiX
} from "react-icons/hi";
import { MdBuild } from "react-icons/md";

import { HandleLinkWhatsapp } from "@/utils/HandlerWhatsapp";
import { Button } from "../Home/Button";

export const Nav = () => {

  let Links = [
    {
      name: 'Home',
      url: '/',
      icon:  HiHome
    },
    {
      name: 'Sobre Nós',
      url: '#about',
      icon: HiFlag
    },
    {
      name: 'Serviços',
      url: '#services',
      icon: MdBuild
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
          gap-2 py-5 md:py-0  absolute md:static
          bg-white md:z-auto z-[990]
          left-0 w-full md:w-auto md:pl-0 pl-9
          transition-all duration-500 ease-in
          shadow-lg md:shadow-none ${isOpen ? 'top-28 opacity-100' : 'top-[-490px]'}
          md:opacity-100 opacity-0
        `}
      > {/**ul */}
        {Links.map((link, index) => (
          <div className="text-xl md:text-sm lg:text-lg hover:text-green-400 
            rounded-sm md:hover:shadow-sm py-2 px-1 md:my-0 my-2
            duration-500 md:border-b-[1px] 
            md:border-transparent md:hover:border-green-400
            "
            key={index}
          >
            <Link
              href={link.url}
              className="
                flex items-center gap-1 text-gray-900 hover:text-gray-500
                px-2 py-2
               "
            >
              {link.icon && <link.icon />}
              <span>{link.name}</span>
            </Link>
            
          </div>
        ))}
        <Button onClick={() => HandleLinkWhatsapp('orcamento')}>
          <HiClipboardCheck />
          <span>Faça seu orçamento</span>
        </Button>
      </nav>
    </>
  )
}