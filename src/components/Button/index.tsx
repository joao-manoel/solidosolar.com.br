
interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-green-500 hover:bg-green-400 text-white 
      shadow-md py-2 px-6  md:ml-8 duration-500 flex items-center text-lg gap-2
      rounded-tl-2xl rounded-br-2xl
      hover:rounded-tl-none hover:rounded-br-none
      hover:rounded-bl-2xl hover:rounded-tr-2xl
      ">
      {children}
    </button>
  )
}