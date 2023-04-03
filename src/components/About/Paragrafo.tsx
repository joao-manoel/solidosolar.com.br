
interface ParagrafoProps {
  children: React.ReactNode
}

export const Paragrafo = ({ children }: ParagrafoProps) => {
  return (
    <p className="text-sm md:text-lg font-light leading-4 mb-4 px-2 md:px-5">
      {children}
    </p>
  )
}