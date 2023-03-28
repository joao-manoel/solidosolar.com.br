import Image from "next/image"

import Logo from '@/assets/images/logo.png'
import Link from "next/link"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <main className="w-screen bg-white shadow-sm">
      <header className="w-full px-5 md:flex md:justify-between items-center">
        <div className="py-4">
          <Link href="/">
            <Image src={Logo} width={164} height={98} alt="Solido Solar"/>
          </Link>
        </div>
        <Nav />
      </header>
    </main>
  )
}