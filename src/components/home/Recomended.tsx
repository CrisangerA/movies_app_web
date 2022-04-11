/* eslint-disable import/no-unresolved */
import { FC, useEffect, useState } from 'react';
import { Movie } from '@models/index';
import MovieCard from '@components/shared/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './recomended.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Recommended: FC<{ movies: Movie[] }> = ({ movies }) => {
  const [classes, setClasses] = useState([styles.animated]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.animatedIn]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <h1 className={styles.title}>Recommended for you</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper}
        >
          {movies.map((movie) => (
            <SwiperSlide key={`Movie-${movie.id}`} className={styles.swiperSlide}>
              <MovieCard {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Recommended;
