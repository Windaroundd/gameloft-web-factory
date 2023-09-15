import React from "react";
import "../../scss/swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { img_exclusive } from "../../utils/exportImages";
const ExclusiveContent = () => {
  return (
    <section className="min-h-screen  pt-48">
      <section className="flex justify-center text-mainBlue">
        <section className="w-1/2">
          <h3 className="section-title">Exclusive Game Content</h3>
          <p className="section-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos.
          </p>
        </section>
      </section>
      <section className="mt-20">
        {" "}
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper overflow-y-visible"
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img_exclusive} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default ExclusiveContent;
