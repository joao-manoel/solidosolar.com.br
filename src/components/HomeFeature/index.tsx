export const HomeFeatureSection = () => {
  return (
    <div className="
        home_feature
        min-h-[350px]
        h-[calc(100vh-118px-188px)]
        w-full
        flex flex-col items-center justify-center gap-4
        "
    >
      <h1
        className="text-8xl md:text-9xl font-roboto font-bold  outlineText
        animate__animated animate__flash animate__infinite
        drop-shadow-2xl
        "
      >
        Energia
      </h1>

      <h2
        className="font-bold text-2xl text-white drop-shadow-md mt-[-25px]"
      >
        Excelência, Rapidez e Qualidade
      </h2>
      <p
        className="text-gray-300 drop-shadow-sm text-md font-light mt-[-10px] text-center"
      >
        Uma empressa 100% Matogrossense focada em gerar energia limpa e sustentável.
      </p>

      <div
        className="mt-2 flex flex-col items-center justify-center gap-2"
      >
        <div className="text-gray-300 flex gap-5 ">
          <span>Residencial</span>
          <span>Comercial</span>
          <span>Industrial</span>
          <span>Agronegócio</span>
        </div>
        <button
          className="px-4 py-2 
            bg-green-500 hover:bg-green-400 duration-500
            text-white font-bold text-2xl 
            drop-shadow-lg 
            rounded-tl-2xl rounded-br-2xl
            hover:rounded-tl-none hover:rounded-br-none
            hover:rounded-bl-2xl hover:rounded-tr-2xl
          "
        >
          Faça seu orçamento
        </button>
      </div>      
    </div>
  )
}