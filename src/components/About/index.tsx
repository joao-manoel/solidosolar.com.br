/* eslint-disable @next/next/no-img-element */

import { BsFillTelephoneFill } from 'react-icons/bs'

import { Paragrafo } from "./Paragrafo"


export const About = () => {
  
  return (
    <div id="about" className="bg-white py-6 px-5 flex flex-col items-center justify-center">
      <header className="relative flex flex-col items-center justify-center">
        <div className="relative flex justify-center z-10">
          <h1 className="text-7xl sm:text-9xl outlineText relative">Sobre</h1>
          <h1 className="
            absolute top-1/3
            font-bold text-green-500 text-4xl 

            wow animate__animated animate__fadeIn
          ">
            Quem Somos
          </h1>
        </div>
        <h3 className="
          font-medium text-xs sm:text-lg md:text-2xl text-gray-400
          mt-[-10px] sm:mt-[-50px] z-20

          animate__animated animate__fadeInUp
        ">
          Somos especialistas em criar soluções
        </h3>
      </header>
      <div className="w-full sm:w-9/12 lg:flex gap-2 mt-5">
        
        <div
          className="w-full sm:max-w-2xl py-2 px-2"
        >
          <Paragrafo>Bem-vindo à Sólido Solar, uma empresa de energia solar dedicada a fornecer soluções sustentáveis e eficientes para residências e empresas em todo o país. Desde a nossa fundação, há mais de 10 anos, temos trabalhado incansavelmente para tornar o mundo um lugar melhor e mais econômico em energia.</Paragrafo>
          <Paragrafo>Na Sólido Solar, acreditamos que a energia solar é o futuro da energia limpa e renovável. É por isso que estamos comprometidos em fornecer aos nossos clientes as melhores soluções em energia solar do mercado. Nossa equipe altamente qualificada de engenheiros e especialistas em energia solar tem se dedicado a desenvolver tecnologias avançadas de painéis solares e sistemas de energia para oferecer aos nossos clientes soluções personalizadas e eficientes.</Paragrafo>

          <div className="flex justify-start px-10 gap-3 items-center">
            <button className="
            bg-green-400 text-white text-2xl px-2 py-2 rounded-full drop-shadow-xl w-16 h-16 flex justify-center items-center
            hover:bg-green-500 duration-500 hover:scale-

            animate__animated animate__pulse animate__infinite
            ">
              <BsFillTelephoneFill />
            </button>
            <span className='font-thin drop-shadow-md '>Entre em contato agora!</span>
          </div>
        </div>
        <div
          className="w-full "
        >
          <img
            className="rounded-3xl drop-shadow-lg "  
            src="/images/fachada.png" alt=""
          />
        </div>
      </div>
    </div>
  )
}