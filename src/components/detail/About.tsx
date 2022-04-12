import { Movie } from '@models/index';
import { FC, useEffect, useState } from 'react';
// import { Image } from '..';
import styles from './about.module.css';

const About: FC<Movie> = ({ title, overview, genres, release_date }) => {
  const [classes, setClasses] = useState([styles.animated]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.animatedIn]);
  }, []);
  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
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
      </div>
    </div>
  );
};
export default About;
