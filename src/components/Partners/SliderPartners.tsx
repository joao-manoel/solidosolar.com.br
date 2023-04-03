/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderPartners = () => {

  const [WindowsWidth, setWindowsWidth] = useState(0)

  useEffect(() => {
    
    addEventListener("resize", (event) => {
      setWindowsWidth(window.screen.width)
    });
  }, [])

  return (
    <Swiper
      spaceBetween={70}
      slidesPerView={WindowsWidth <= 285 ? 2 : WindowsWidth <= 500 ? 3 : WindowsWidth <= 900 ? 4 : 5}
      className='flex items-center justify-center h-20 py-4'
    >
      <SwiperSlide className="">
        <img src='/images/risen.png' className="h-full"/>
      </SwiperSlide>

      <SwiperSlide className="">
        <img src='/images/logo.png' className="h-full"/>
      </SwiperSlide>

      <SwiperSlide className="">
        <img src='/images/sofar.png' className="h-full" />
      </SwiperSlide>

      <SwiperSlide className="">
        <img src='/images/logo_bedinsolar.png' className="h-full" />
      </SwiperSlide>

      <SwiperSlide className="">
        <img src='/images/CanadianSolar-Brazil-Web-Logo.png' className="h-full" />
      </SwiperSlide>
    </Swiper>
  )
}