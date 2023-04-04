import Image, { StaticImageData } from "next/image";
import { NumberAnimate } from "../NumberAnimate";

interface CardProps {
  number: number;
  description: string;
  icon: StaticImageData;
}
export const Card = ({number, description, icon}: CardProps) => {
  return (
    <div className="text-white flex justify-center overflow-hidden items-center gap-2 px-2 py-10 mt-2 sm:mt-5 sm:mb-5 ">
      <Image height="40" width="40" src={icon} alt={description} className="h-10 w-10 md:h-16 md:w-16" />
      <div className="flex flex-col items-center justify-start md:items-start">
        <h1 className="font-bold text-md lg:text-3xl md:text-4xl flex justify-start gap-2"><span>+</span> <NumberAnimate n={number} /></h1>
        <span className="text-gray-200 text-xs sm:text-sm md:text-md font-bold uppercase">{description}</span>
      </div>
    </div>
  )
}