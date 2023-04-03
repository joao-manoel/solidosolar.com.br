
interface ParagrafoProps {
  children: React.ReactNode
}

export const Paragrafo = ({ children }: ParagrafoProps) => {
  return (
    <p className="text-sm md:text-lg font-light leading-7 mb-4 px-10">
      {children}
    </p>
  )
}