export const HomeFeatureSection = () => {
  return (
    <div className="
        home_feature
        min-h-[350px]
        h-[calc(100vh-118px-188px)]
        w-full
        flex flex-col items-center justify-center gap-4 px-2
        "
    >
      <h1
        className="text-6xl sm:text-8xl md:text-9xl font-roboto font-bold  outlineText
        animate__animated animate__flash animate__infinite animate__slow
        drop-shadow-2xl
        "
      >
        Energia
      </h1>

      <h2
        className="
          font-bold text-1xl sm:text-2xl text-white drop-shadow-md mt-[-25px]
          animate__animated animate__fadeInDown
        "
      >
        Excelência, Rapidez e Qualidade
      </h2>
      <p
        className="text-gray-300 drop-shadow-sm text-sm sm:text-md font-light mt-[-10px] text-center
          animate__animated animate__fadeInUp
        "
      >
        Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável.
      </p>

      <div
        className="mt-2 flex flex-col items-center justify-center gap-2"
      >
        <div className="text-gray-300 flex gap-5 text-[8px] sm:text-xs uppercase font-bold ">
          <span className="animate__animated animate__bounceIn animate__delay-1s">Residencial</span>
          <span className="animate__animated animate__bounceIn animate__delay-1s">Comercial</span>
          <span className="animate__animated animate__bounceIn animate__delay-1s">Industrial</span>
          <span className="animate__animated animate__bounceIn animate__delay-1s">Agronegócio</span>
        </div>
        <button
          className="px-4 py-2 uppercase font-inter
            bg-green-500 hover:bg-green-400 duration-500
            text-white font-bold text-1xl sm:text-2xl 
            drop-shadow-lg 
            rounded-tl-2xl rounded-br-2xl
            hover:rounded-tl-none hover:rounded-br-none
            hover:rounded-bl-2xl hover:rounded-tr-2xl
            animate__animated animate__flipInX
          "
        >
          Faça seu orçamento
        </button>
      </div>      
    </div>
  )
}