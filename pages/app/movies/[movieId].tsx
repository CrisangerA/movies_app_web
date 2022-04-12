import { About, Actors, Header } from '@components/detail';
import { DashboardLayout } from '@components/shared';
import { Movie, Actor } from '@models/index';
import movieService from '@services/movie.service';
import type { NextPage, NextPageContext } from 'next';
import styles from './movieid.module.css';

interface DetailsProps {
  movie: Movie;
  actors: Actor[];
}

const Details: NextPage<DetailsProps> = (props) => (
  <DashboardLayout
    title={`Movies App | ${props.movie.title}`}
    description={`${props.movie.title}  ${props.movie.tagline}`}
  >
    <div className={styles.container}>
      <div className={styles.child}>
        <Header {...props.movie} />
        <About {...props.movie} />
        <Actors actors={props.actors} />
      </div>
    </div>
  </DashboardLayout>
);

export async function getServerSideProps(context: NextPageContext) {
  const { movieId } = context.query;
  const movie = await movieService.getMovie(movieId as string);
  const actors = await movieService.getActors(movieId as string);
  return { props: { movie, actors: actors.cast } };
}

export default Details;
