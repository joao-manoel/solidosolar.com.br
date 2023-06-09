import { useState } from "react";

import { HandleLinkWhatsapp } from "@/utils/HandlerWhatsapp";
import { Tooltip } from "flowbite-react";
import { AiOutlineClose } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { WidgetBtnType } from "./WidgetBtnType";

export type TypeProps = 'orcamento' | 'duvida' | 'outro'

export const WidgetsWhatsapp = () => {
  let phoneNumber = '65992194096'

  const [isOpen, setIsOpen] = useState(false)

  const [type, setType] = useState<TypeProps>('orcamento')

  const HandleWhatsapp = () => {
    HandleLinkWhatsapp(type)
    setIsOpen(false)
  }

  const isType = () => {
    if (type === 'orcamento' || type === 'duvida' || type === 'outro') {
      return true
    }

    return false
  }

  return (
    <div
      className="fixed bottom-7 right-7 z-50"
    >
      
      <div className={`${isOpen ? "hidden" : "static"} duration-500`}>
        <Tooltip
          content="Precisa de ajuda?"
          style="light"
          placement="left"
        >
          <button
            onClick={() => setIsOpen(!isOpen)} 
            className="btn-whatsapp text-3xl bg-green-400 rounded-full 
            px-3 py-3 drop-shadow-2xl 
          ">
            <FaWhatsapp className="text-white" />
          </button>
        </Tooltip>
      </div>

      <div className={`${isOpen ? "static" : "hidden"} duration-500 drop-shadow-md`}>
        <div className="w-64 sm:w-80 md:w-96">
          <header className="bg-green-500 px-2 py-2 
            flex justify-between items-center text-white relative
            rounded-t-md
          ">
            <span className="drop-shadow-md cursor-default">Como podemos te ajudar?</span>
            <button
              onClick={() => setIsOpen(!isOpen)} 
              className="
                rounded-full bg-gray-200 text-gray-600 py-2 px-2
                hover:drop-shadow-md duration-500
                border-solid border-2 border-transparent hover:border-green-600
              ">
              <AiOutlineClose />
            </button>
          </header>
          
          <div
            className="bg-gray-200 rounded-b-md py-2 px-2"
          >
            {/*}
            <div
              className="
                text-gray-600 font-thin
              "
            >
              <p className="shadow-lg bg-white rounded-md py-2 px-2 w-fit">Olá 👋</p>
              <p className="shadow-lg bg-white rounded-md py-2 px-2 mt-1 w-fit">Podemos te ajudar?</p>
            </div>
          {*/}
            
            <div
              className="flex justify-center gap-2 h-full px-2"
            >
              <WidgetBtnType
                onClick={() => setType('orcamento')}
                isType='orcamento'
                isSelected={type === 'orcamento' ? true : false}
              />
              <WidgetBtnType 
                onClick={() => setType('duvida')}
                isType='duvida' 
                isSelected={type === 'duvida' ? true : false} 
                />
              <WidgetBtnType 
                onClick={() => setType('outro')}
                isType='outros' 
                isSelected={type === 'outro' ? true : false} 
                />
            </div>
            
            <button
              onClick={HandleWhatsapp}
              className="
              flex justify-center items-center gap-1 text-white rounded-md 
              drop-shadow-md bg-green-500 hover:bg-green-400 duration-500
              w-full py-4 px-2 mt-2
              font-normal
              text-md disabled:bg-gray-500
            " disabled={isType() ? false : true}>
              <FaWhatsapp />
              <span >Abrir o Whatsapp</span>
            </button>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}