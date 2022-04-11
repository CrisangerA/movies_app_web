import Image from 'next/image';
import Link from 'next/link';
import SCREEN_ROUTES from '@shared/screen.routes';
import styles from './bottomNavbar.module.css';

const BottomNavbar = () => (
  <div className={styles.container}>
    <div className={styles.child}>
      <Link href={SCREEN_ROUTES.movies.list} passHref>
        <div className={styles.icon}>
          <Image src='/static/logos/icon-home.svg' alt='Icon from home' width={40} height={40} />
          <p>Home</p>
        </div>
      </Link>
      <Link href={SCREEN_ROUTES.movies.favorites} passHref>
        <div className={styles.icon}>
          <Image
            src='/static/logos/icon-favorites.svg'
            alt='Icon from home'
            width={40}
            height={40}
          />
          <p>Favorites</p>
        </div>
      </Link>
    </div>
  </div>
);

export default BottomNavbar;
