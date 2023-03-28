import { NumberAnimate } from "../NumberAnimate";

interface CardProps {
  number: number;
  description: string;
  icon: string;
}
export const Card = ({number, description, icon}: CardProps) => {
  return (
    <div className="text-green-500 flex justify-center items-center gap-2 px-2 py-20 mt-5 mb-5 ">
      <img src={icon} alt={description} className="h-10 w-10 md:h-16 md:w-16" />
      <div className="flex flex-col items-center justify-start md:items-start">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl flex justify-start gap-2"><span>+</span> <NumberAnimate n={number} /></h1>
        <span className="text-white text-xs sm:text-sm md:text-lg font-bold uppercase">{description}</span>
      </div>
    </div>
  )
}