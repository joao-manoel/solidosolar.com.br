import { HandleLinkWhatsapp } from "@/utils/HandlerWhatsapp"
import { ImageItem } from "./item"

export const BudgetService = () => {
  return (
    <div className="relative flex flex-col items-center mb-56 sm:mb-44">
      <div className="min-h-[800px] w-full md:flex ">
        <ImageItem
          title='Inversores'
          n={1}
          url='../assets/images/inversores.jpg'
        />
        <ImageItem
          title='Painéis Solares'
          n={2}
          url='../assets/images/inversores.jpg'
        />
        <ImageItem
          title='Energia Sustentável'
          n={3}
          url='../assets/images/inversores.jpg'
        />
      </div>

      <div id="services" className="w-4/5 sm:w-4/6 md:w-1/2
        bg-green-500 py-16 px-6 text-white shadow-sm
        flex flex-col sm:flex-row items-center justify-between
        absolute bottom-0 xs:-mb-60 sm:-mb-32
        xs:gap-4
        rounded-md"
      >
        <div>
          <h3 className="text-2xl font-bold">Solicite um orçamento</h3>
          <p>(65) 9 9219-4096</p>
        </div>
        <div>
          <button
            onClick={() => HandleLinkWhatsapp('orcamento')}
            className="bg-white text-green-400 py-4 px-2 font-semibold 
            rounded-tl-2xl rounded-br-2xl duration-500
            hover:rounded-tl-none hover:rounded-br-none
            hover:rounded-bl-2xl hover:rounded-tr-2xl
            shadow-lg
            "
          >Solicite um orçamento agora pelo nosso whatsapp!</button>
        </div>
      </div>
    </div>
  )
}