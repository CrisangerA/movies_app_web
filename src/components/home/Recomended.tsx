/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { MovieAPI } from '@models/index';
import { MovieCard, Animation, Slider } from '@components/shared/index';
import movieService from '@services/movie.service';
import styles from './recomended.module.css';

const Recommended: FC<{ title: string; initialData?: MovieAPI; searchText?: string }> = ({
  title,
  searchText = '',
}) => {
  const [controlledSwiper, setControlledSwiper] = useState<any>();

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

  const movies = data?.pages.map((page) => page.results).reduce((prev, curr) => [...prev, ...curr]);

  return (
    <Animation from='left'>
      <h1 className={styles.title}>
        {title}
        {(isFetching || isLoading) && ' - Loading...'}
      </h1>

      <Slider
        spaceBetween={0}
        slidesPerView={6}
        preventClicks
        onSwiper={(ctx: any) => setControlledSwiper(ctx)}
        onReachEnd={() => {
          fetchNextPage();
        }}
      >
        {movies.map((movie, index) =>
          index === movies.length - 1 && isFetchingNextPage ? (
            <p>Loading...</p>
          ) : (
            <MovieCard key={`Movie-${movie.id}`} {...movie} />
          )
        )}
      </Slider>
    </Animation>
  );
};
export default Recommended;
