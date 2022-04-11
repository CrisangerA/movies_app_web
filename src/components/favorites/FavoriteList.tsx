/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFavorites from '@hooks/useFavorites';
import { FavoriteItem } from './index';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FavoriteList: FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <h1>You dont have favorites</h1>;

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {favorites.map((id) => (
        <SwiperSlide key={`Favorite-${id}`}>
          <FavoriteItem id={id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FavoriteList;
