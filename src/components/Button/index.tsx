
interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-blue-900 hover:bg-blue-800 text-white 
      shadow-md py-2 px-6 rounded md:ml-8 duration-500 flex items-center text-lg gap-2">
      {children}
    </button>
  )
}