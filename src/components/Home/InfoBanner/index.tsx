import CustomerIcon from '@/assets/images/customers.png'
import GarantiaIcon from '@/assets/images/garantia.png'
import GroupIcon from '@/assets/images/group.png'
import PlacasIcon from '@/assets/images/placas.png'
import { Card } from "./Card"

export const InfoBanner = () => {
  return (
    <div className="w-full bg-green-500 flex justify-center overflow-hidden items-center gap-1 sm:gap-12 py-2 flex-wrap sm:flex-nowrap md:gap-20 px-4 ">
      <Card number={4} description="ANOS NO MERCADO" icon={GroupIcon}/>
      <Card number={25} description="Garantia" icon={GarantiaIcon}/>
      <Card number={5000} description="Painéis Solares" icon={CustomerIcon}/>
      <Card number={300} description="Clientes Satisfeitos" icon={PlacasIcon}/>
    </div>
  )
}