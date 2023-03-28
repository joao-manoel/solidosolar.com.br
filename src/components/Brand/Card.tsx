import { NumberAnimate } from "../NumberAnimate";

interface CardProps {
  number: number;
  description: string;
  icon: string;
}
export const Card = ({number, description, icon}: CardProps) => {
  return (
    <div className="text-green-500 flex flex-col md:flex-row items-center gap-2 px-10 py-10 mt-5 mb-5">
      <img src={icon} alt={description} className="h-16 w-16 md:h-16" />
      <div className="flex flex-col items-center justify-start md:items-start">
        <h1 className="font-bold text-4xl flex justify-start gap-2"><span>+</span> <NumberAnimate n={number} /></h1>
        <span className="text-white text-sm font-bold uppercase">{description}</span>
      </div>
    </div>
  )
}