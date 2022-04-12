/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import { FC, Fragment, useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { MovieAPI } from '@models/index';
import { MovieCard } from '@components/shared/index';
import movieService from '@services/movie.service';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './recomended.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Recommended: FC<{ title: string; initialData?: MovieAPI; searchText?: string }> = ({
  title,
  searchText = '',
}) => {
  const [classes, setClasses] = useState([styles.animated]);
  const [controlledSwiper, setControlledSwiper] = useState<any>();

  useEffect(() => {
    setClasses((prev) => [...prev, styles.animatedIn]);
  }, []);

  const resolveHandler = (pageParam: number | undefined) => {
    const cpage = `&page=${pageParam}`;
    if (title === 'Your Search') return movieService.searchMovie(`&query=${searchText}${cpage}`);
    if (title === 'Top Rated') return movieService.getTopRated(cpage);
    return movieService.getRecomended(cpage);
  };

  const { data, isFetchingNextPage, fetchNextPage, refetch, isFetching, isLoading } = useInfiniteQuery(
    title.replace(/g' '/, ''),
    async ({ pageParam }) => {
      const res = await resolveHandler(pageParam);
      return res;
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    }
  );

  useEffect(() => {
    if (searchText !== '') {
      refetch();
      if (data && controlledSwiper?.slideTo) {
        controlledSwiper?.slideTo(0, 500);
      }
    }
  }, [searchText]);

  if (data === undefined) return <div />;
  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <h1 className={styles.title}>
          {title}
          {(isFetching || isLoading) && ' - Loading...'}
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          preventClicks
          onSwiper={(ctx) => setControlledSwiper(ctx)}
          onReachEnd={() => {
            fetchNextPage();
          }}
          className={styles.swiper}
        >
          {data?.pages?.map((page, i) => (
            <Fragment key={i}>
              {page.results.map((movie, index) => (
                <SwiperSlide key={`Movie-${movie.id}`} className={styles.swiperSlide}>
                  {index === page.results.length - 1 && isFetchingNextPage ? (
                    <p>Loading...</p>
                  ) : (
                    <MovieCard {...movie} />
                  )}
                </SwiperSlide>
              ))}
            </Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Recommended;
