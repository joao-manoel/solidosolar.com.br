import { About } from "@/components/About";
import { Brand } from "@/components/Brand";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-118px-188px)] bg-gray-900 flex justify-center items-center">
        <p className="text-white text-2xl md:text-4xl font-inter font-bold outlineText animate__animated animate__fadeInLeftBig">Slide Em Construção..</p>
      </div>
      <Brand />
      <About />
    </>
  )
}
