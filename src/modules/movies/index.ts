import dynamic from 'next/dynamic';

export { default as movieService } from './movie.service';
export * from './domain/movie.model';

const MovieCard = dynamic(() => import('./ui/MovieCard'));
export { MovieCard };
