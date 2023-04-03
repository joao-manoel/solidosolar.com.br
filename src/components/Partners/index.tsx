import { SliderPartners } from "./SliderPartners"


export const Partners = () => {



  return (
    <div className="">
      <header className="relative flex flex-col items-center justify-center">
        <div className="relative flex justify-center z-10">
          <h1 className="text-7xl sm:text-9xl outlineText relative">Parceiros</h1>
          <h1 className="
            absolute top-1/3
            font-bold text-green-500 text-4xl 

            wow animate__animated animate__fadeIn
          ">
            Parceiros da empresa
          </h1>
        </div>
      </header>
      <SliderPartners />
      

    </div>
  )
}