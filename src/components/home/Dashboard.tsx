/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState } from 'react';
import { MovieAPI } from '@models/movie.model';
import useDebounce from '@hooks/useDebounce';
import Searchbar from './Searchbar';
import Recommended from './Recomended';

interface DashboardProps {
  discover: MovieAPI;
  topRated: MovieAPI;
}

const Dashboard: FC<DashboardProps> = () => {
  // const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState('');
  // const [movies, setMovies] = useState<MovieAPI>();
  const debouncedValue = useDebounce(searchText, 500);
  // const { isLoading, data, refetch } = useQuery(
  //   'searchMovies',
  //   () => movieService.searchMovie(`&query=${debouncedValue}&page=${page}`),
  //   {
  //     enabled: false,
  //   }
  // );

  // useEffect(() => {
  //   if (searchText !== '') {
  //     refetch();
  //   } else if (searchText === '') {
  //     setMovies([]);
  //   }
  // }, [debouncedValue]);

  return (
    <>
      <Searchbar value={searchText} onChange={setSearchText} />
      {/* {isLoading && <p>Loading...</p>}
      {movies && movies?.results?.length > 0 && <Recommended title='Your Search' searchText={debouncedValue} />} */}
      {debouncedValue !== '' && <Recommended title='Your Search' searchText={debouncedValue} />}
      <Recommended title='Recomended for you' />
      <Recommended title='Top Rated' />
    </>
  );
};

export default Dashboard;
