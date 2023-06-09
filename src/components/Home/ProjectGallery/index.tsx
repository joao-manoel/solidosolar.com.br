import { GalleryProject } from "./gallery"

const projects = [
  {
    type: 'Residencial',
    title: 'Projeto 01',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  },
  {
    type: 'Residencial',
    title: 'Projeto 02',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  },
  {
    type: 'Residencial',
    title: 'Projeto 03',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  },
  {
    type: 'Residencial',
    title: 'Projeto 04',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  },
  {
    type: 'Residencial',
    title: 'Projeto 05',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  },
  {
    type: 'Residencial',
    title: 'Projeto 06',
    description: 'projeto energia solar',
    images: [
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg',
      'https://www.agerio.com.br/wp-content/uploads/2018/11/1-energia.jpg'
    ]
  }
]

export const ProjectGallery = () => {
  return (
    <div className="mt-6 min-h-screen">
      <header className="relative flex flex-col items-center justify-center">
        <div className="relative flex justify-center z-10">
          <h1 className=" text-5xl sm:text-8xl md:text-9xl lg:text-9xl outlineText relative">Projetos</h1>
          <h1 className="
            absolute top-1/3
            font-bold text-green-500 
            text-xl sm:text-4xl md:text-5xl lg:text-5xl
            wow animate__animated animate__fadeIn
          ">
            Nossos Últimos Projetos
          </h1>
          
        </div>
      </header>

      <div>
        <GalleryProject projects={projects} />
      </div>
    </div>
  )
}