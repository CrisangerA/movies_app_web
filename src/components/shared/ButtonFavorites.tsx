import Image from 'next/image';
import { FC } from 'react';
import useFavorites from '@hooks/useFavorites';
import styles from './buttonfavorites.module.css';

const ButtonFavorites: FC<{ id: string }> = ({ id }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const selected = isFavorite(id);
  return (
    <button type='button' onClick={() => (selected ? removeFavorite(id) : addFavorite(id))} className={styles.button}>
      <div className={`${styles.container} ${selected ? styles.containerHeart : styles.containerStar}`}>
        <Image
          alt='Logo add favorite'
          src={selected ? '/static/logos/icon-heart.webp' : '/static/logos/icon-star.png'}
          width={30}
          height={30}
        />
      </div>
    </button>
  );
};

export default ButtonFavorites;
