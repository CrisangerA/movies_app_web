import { About, Actors, Header } from '@components/detail';
import { BottomNavbar, Page } from '@components/index';
import { Actor, Movie, movieService } from '@modules/movies';
import type { NextPage, NextPageContext } from 'next';
import styles from './movieid.module.css';

interface DetailsProps {
  movie: Movie;
  actors: Actor[];
}

const Details: NextPage<DetailsProps> = (props) => (
  <Page title={`Movies App | ${props.movie.title}`} description={`${props.movie.title}  ${props.movie.tagline}`}>
    <div className={styles.container}>
      <div className={styles.child}>
        <Header backdrop_path={props.movie.backdrop_path} title={props.movie.title} />
        <About {...props.movie} />
        <Actors actors={props.actors} />
      </div>
    </div>
    <BottomNavbar />
  </Page>
);

export async function getServerSideProps(context: NextPageContext) {
  const { movieId } = context.query;
  const movie = await movieService.getMovie(movieId as string);
  const actors = await movieService.getActors(movieId as string);
  return { props: { movie, actors: actors.cast } };
}

export default Details;
