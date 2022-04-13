import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Movie } from '@models/index';
import SCREEN_ROUTES from '@shared/screen.routes';
import ButtonFavorites from './ButtonFavorites';
import styles from './movieCard.module.css';

const MovieCard: FC<Movie> = ({ id, title, poster_path, vote_average }) => (
  <div className={`MovieCard ${styles.container}`}>
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
export default MovieCard;
