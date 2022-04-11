import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import ButtonFavorites from '@components/ButtonFavorites';
import SCREEN_ROUTES from '@modules/shared/screen.routes';
import { Movie } from '../domain/movie.model';
import styles from './movieCard.module.css';

const MovieCard: FC<Movie> = (props) => {
  const { id, title, poster_path, vote_average } = props;
  // const { id, title, poster_path, vote_average } = props as Movie;
  return (
    <div className={styles.container}>
      <Link href={SCREEN_ROUTES.movies.detail(id)} passHref>
        <Image
          alt={`Image to ${title}`}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          width={500}
          height={750}
        />
      </Link>
      <ButtonFavorites id={id} />
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.title}>{vote_average}</h2>
    </div>
  );
};
export default MovieCard;
