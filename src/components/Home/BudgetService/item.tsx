

type ImageItemProps = {
  url: string
  n: number
  title: string
}

export const ImageItem = ({ url, n, title }: ImageItemProps) => {


  return (
    <div
      className={`
        bg-red-300 h-96 md:h-screen md:min-w-[33.3%]
        ${n === 1 ? "bg-[url('../assets/images/inversores.jpg')]" : n === 2 ? "bg-[url('../assets/images/paineis-solares.jpg')]" : "bg-[url('../assets/images/sustentavel.jpg')]"}
        bg-left bg-cover
        grayscale hover:grayscale-0 duration-500
        flex flex-col items-center justify-center
        relative h-other
      `}
    >
      <h1 className="outlineText-White text-[15rem]">
        {n}
      </h1>
      <h2
        className="text-white text-3xl absolute font-bold"
      >{title}</h2>
      
    </div>
  )
}