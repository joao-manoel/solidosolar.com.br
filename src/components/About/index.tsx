export const About = () => {
  return (
    <div className="bg-white py-6 px-5 flex justify-center">
      <header className="relative flex flex-col items-center justify-center">
        <div className="relative flex justify-center z-10">
          <h1 className="text-9xl outlineText relative">Sobre</h1>
          <h1 className="
            absolute top-1/3
            font-bold text-green-500 text-4xl 

            animate__animated animate__fadeIn
          ">
            Quem Somos
          </h1>
        </div>
        <p className="font-medium text-2xl text-gray-400 mt-[-50px] z-20">Somos especialistas em gerar resultados</p>
      </header>      
    </div>
  )
}