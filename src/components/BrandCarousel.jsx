import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {   Autoplay } from "swiper/modules";


function BrandCarousel() {
  return (
    <>
      <div
        className="bg-white brandCarousel "
        data-aos="flip-down"
      >
        <div className="container mx-auto border-t border-b border-black-text-100 py-5">
          <Swiper
            spaceBetween={24}
            slidesPerView={6}
            loop={true}
            autoplay={{ delay: 2000  }}
            speed={2000}
            modules={[ Autoplay]}
          >
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo1.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo2.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo3.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo4.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo5.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo6.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo6.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mx-auto block"
                src="assets/images/brand/logo6.svg"
                alt="brandlogo"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default BrandCarousel;
