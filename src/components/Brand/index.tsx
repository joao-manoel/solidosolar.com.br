import { Card } from "./Card"

export const Brand = () => {
  return (
    <div className="w-screen bg-blue-900 flex flex-col md:flex-row md:justify-center items-center gap-12">
      <Card number={4} description="ANOS NO MERCADO" icon="./images/group.png"/>
      <Card number={200} description="Painéis Solares" icon="./images/placas.png"/>
      <Card number={300} description="Clientes Satisfeitos" icon="./images/customers.png"/>
    </div>
  )
}