

import bedinSolarImage from '@/assets/images/bedinsolar.png'
import canadianSolarImage from '@/assets/images/canadiansolar.png'
import octechImage from '@/assets/images/octech.png'
import risenImage from '@/assets/images/risen.png'
import sofarImage from '@/assets/images/sofar.png'
import { Slider } from '../Slider'



  const images = [
  risenImage,
  sofarImage,
  octechImage,
  bedinSolarImage,
  canadianSolarImage
]

export const Partners = () => {

  



  return (
    <div className="">
      <Slider images={images} />
    </div>
  )
}