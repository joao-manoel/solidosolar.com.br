import { Carousel } from 'flowbite-react'

export const HeroSection = () => { 
  return (
    <div className="h-56 sm:h-128 xl:h-128 2xl:h-128 rounded-none">
      <Carousel leftControl="left" rightControl="right" slide={true} slideInterval={10000} className="rounded-none">
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-none">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  )
}