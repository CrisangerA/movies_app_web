/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ButtonFavorites from '@components/ButtonFavorites';
import { Movie } from '@modules/movies';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import styles from './header.module.css';

const About: FC<Movie> = (props) => {
  const { backdrop_path, title } = props;
  // const { favorites, addFavorite } = useFavorites();

  const [classes, setClasses] = useState([styles.animated]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.animatedIn]);
  }, []);
  // console.log('header ', favorites);
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
        <ButtonFavorites {...props} />
        {/* <div className={styles.icon} onClick={() => addFavorite(props)}>
          {favorites.find((f) => f.id === props.id) ? (
            <p>{'<3'}</p>
          ) : (
            <Image
              alt='Logo add favorite'
              src='/static/logos/icon-star.png'
              width={30}
              height={30}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};
export default About;
