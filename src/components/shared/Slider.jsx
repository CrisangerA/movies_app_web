/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = (props) => (
  <Swiper {...props}>
    {props.children.map((child, i) => (
      <SwiperSlide key={`Slide-${i}`}>{child}</SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
