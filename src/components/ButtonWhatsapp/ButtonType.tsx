import { ButtonHTMLAttributes, ForwardRefRenderFunction, forwardRef } from "react";
import { FcAnswers, FcDecision, FcViewDetails } from "react-icons/fc";

interface ButtonTypesInterface {
  isType: 'orcamento' | 'duvida' | 'outros',
  isSelected: boolean
  onClick: () => void
}

const Button: ForwardRefRenderFunction<ButtonHTMLAttributes<ButtonTypesInterface>, ButtonTypesInterface> = (
  { isType, isSelected, onClick, ...buttonRest }: ButtonTypesInterface, ref) => {
  
  return (
    <button
      {...buttonRest}
      onClick={onClick}
      className={`
      h-full
      duration-500
      border-solid border-2 
      ${isSelected ? 'border-green-400' : 'transparent'}
      outline-1 outline-green-500
      ${isType == 'orcamento' ? 'bg-blue-300 hover:bg-blue-200' :
        isType == 'duvida' ? 'bg-green-300 hover:bg-green-200' :
        isType == 'outros'? 'bg-yellow-200 hover:bg-yellow-100' : 'bg-white'
    } 
      px-2 py-8 rounded-md flex flex-col items-center
      text-xs sm:text-base w-24 cursor-pointer
      text-gray-600 up font-thin
    `}>
      
      {
        isType == 'orcamento' ?  <FcViewDetails className="text-2xl" /> :
        isType == 'duvida' ? <FcDecision className="text-2xl" />:
        isType == 'outros'? <FcAnswers className="text-2xl" /> : ''
      }
      <span>
        {
          isType == 'orcamento' ? 'Orçamento' :
          isType == 'duvida' ? 'Duvidas' :
          isType == 'outros'? 'Outros' : ''
        }
      </span>
    </button>
  )
}

export const ButtonType = forwardRef(Button)