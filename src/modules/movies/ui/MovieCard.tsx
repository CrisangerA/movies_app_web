import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import SCREEN_ROUTES from '@modules/shared/screen.routes';
import { Movie } from '../domain/movie.model';
import styles from './movieCard.module.css';

const MovieCard: FC<Movie> = ({ id, title, poster_path, vote_average }) => (
  <Link href={SCREEN_ROUTES.movies.detail(id)} passHref>
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          // className={styles.image}
          alt={`Image to ${title}`}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          width={500}
          height={750}
        />
      </div>

      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.title}>{vote_average}</h2>
    </div>
  </Link>
);
export default MovieCard;
