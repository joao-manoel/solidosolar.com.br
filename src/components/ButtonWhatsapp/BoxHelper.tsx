import { FcAnswers, FcDecision, FcDocument } from "react-icons/fc";

interface BoxHelper {
  type: 'orcamento' | 'duvida' | 'outros'
}

export const BoxHelper = ({ type }: BoxHelper) => {
  
  return (
    <button className={`
      h-full
      duration-500
      outline-1 outline-green-500
      ${type == 'orcamento' ? 'bg-blue-300 hover:bg-blue-200' :
        type == 'duvida' ? 'bg-green-300 hover:bg-green-200' :
        type == 'outros'? 'bg-yellow-200 hover:bg-yellow-100' : 'bg-white'
    } 
      px-2 py-8 rounded-md flex flex-col items-center
      text-xs sm:text-base w-24 cursor-pointer
      text-gray-600 up font-thin
    `}>
      
      {
        type == 'orcamento' ?  <FcDocument className="text-2xl" /> :
        type == 'duvida' ? <FcDecision className="text-2xl" />:
        type == 'outros'? <FcAnswers className="text-2xl" /> : ''
      }
      <span>
        {
          type == 'orcamento' ? 'Orçamento' :
          type == 'duvida' ? 'Duvidas' :
          type == 'outros'? 'Outros' : ''
        }
      </span>
    </button>
  )
}