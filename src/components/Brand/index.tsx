import { Card } from "./Card"

export const Brand = () => {
  return (
    <div className="w-full bg-blue-900 flex justify-center items-center gap-12 md:gap-20 px-4 ">
      <Card number={4} description="ANOS NO MERCADO" icon="./images/group.png"/>
      <Card number={5000} description="Painéis Solares" icon="./images/placas.png"/>
      <Card number={300} description="Clientes Satisfeitos" icon="./images/customers.png"/>
    </div>
  )
}