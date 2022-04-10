import { FC, useEffect, useState } from 'react';
import styles from './searchbar.module.css';

const Search: FC = () => {
  const [classes, setClasses] = useState([styles.searchbar]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.containerIn]);
    // return () => {

    // }
  }, []);
  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <input className={styles.input} placeholder='Search....' />
      </div>
      {/* <input className={styles.input} placeholder='Search....' /> */}
    </div>
  );
};
export default Search;
