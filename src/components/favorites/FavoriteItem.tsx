import { FC } from 'react';
import { useQuery } from 'react-query';
import { Movie, MovieCard, movieService } from '@modules/movies';

const FavoriteItem: FC<{ id: string }> = ({ id }) => {
  const { isLoading, data } = useQuery(`favorite-${id}`, () => movieService.getMovie(id));

  if (isLoading) return <p>Loading...</p>;

  return <MovieCard key={`Favorite-${id}`} {...(data as Movie)} />;
};

export default FavoriteItem;
