import { TextInput } from '@components/@form';
import { FC, useEffect, useState } from 'react';
import styles from './searchbar.module.css';

const Search: FC = () => {
  const [classes, setClasses] = useState([styles.searchbar]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.containerIn]);
  }, []);
  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <TextInput placeholder='Search....' />
      </div>
    </div>
  );
};
export default Search;
