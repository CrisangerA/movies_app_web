import { FC } from 'react';
import { Animation } from '@components/shared';
import { Movie } from '@models/index';
import styles from './about.module.css';

const About: FC<Movie> = ({ title, overview, genres, release_date }) => (
  <Animation from='left'>
    <h1 className={styles.title}>{title}</h1>
    <h4 className={styles.paragraph}>{overview}</h4>
    <h3>Studio: </h3>
    <h3>
      Genere:
      {genres.map((g) => g.name).join(', ')}
    </h3>
    <h3>
      Release:
      {release_date}
    </h3>
  </Animation>
);
export default About;
