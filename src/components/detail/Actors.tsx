/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import { FC } from 'react';
import { Actor } from '@modules/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './about.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Actors: FC<{ actors: Actor[] }> = ({ actors }) => (
  <div>
    <Swiper
      spaceBetween={0}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      {actors.map((actor) => (
        <SwiperSlide key={`Actor-${actor.id}`} className={styles.swiperSlide}>
          <Image
            alt={`Image to ${actor.name}`}
            className={styles.actorImage}
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            width={150}
            height={150}
            layout='fixed'
          />
          <p>{actor.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Actors;
