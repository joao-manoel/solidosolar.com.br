
interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="
      w-11/12 lg:w-auto
    bg-green-500 hover:bg-green-400 text-white 
      shadow-md py-4 lg:py-2 px-6  md:ml-8 duration-500 flex items-center justify-center lg:justify-start
      text-lg gap-2 
      rounded-tl-2xl rounded-br-2xl
      hover:rounded-tl-none hover:rounded-br-none
      hover:rounded-bl-2xl hover:rounded-tr-2xl
      ">
      {children}
    </button>
  )
}