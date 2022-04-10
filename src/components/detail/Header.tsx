import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from './header.module.css';

const About: FC<{ backdrop_path: string; title: string }> = ({ backdrop_path, title }) => {
  const [classes, setClasses] = useState([styles.animated]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.animatedIn]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <Image
          className={styles.hero}
          alt={`Image to ${title}`}
          src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
          width={1280}
          height={720}
          layout='responsive'
        />
      </div>
    </div>
  );
};
export default About;
