import bedinSolarImage from '@/assets/images/bedinsolar.png'
import canadianSolarImage from '@/assets/images/canadiansolar.png'
import octechImage from '@/assets/images/octech.png'
import risenImage from '@/assets/images/risen.png'
import sofarImage from '@/assets/images/sofar.png'
import { Slider } from '../../Slider'



const images = [
  risenImage,
  sofarImage,
  octechImage,
  bedinSolarImage,
  canadianSolarImage
]

export const Partners = () => {

  return (
    <div className="mt-10">
      <header className="relative flex flex-col items-center justify-center">
        <div className="relative flex justify-center z-10">
          <h1 className=" text-5xl sm:text-8xl md:text-9xl lg:text-9xl outlineText relative">Parceiros</h1>
          <h1 className="
            absolute top-1/3
            font-bold text-green-500 
            text-2xl sm:text-4xl md:text-5xl lg:text-5xl
            wow animate__animated animate__fadeIn
          ">
            Parceiros da empresa
          </h1>
          
        </div>
      </header>
      <Slider images={images} />
    </div>
  )
}