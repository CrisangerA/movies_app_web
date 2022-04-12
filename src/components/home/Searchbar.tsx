import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { TextInput } from '@components/@form';
import styles from './searchbar.module.css';

interface SearchProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  // onChange: (value: string) => void;
}

const Search: FC<SearchProps> = ({ value, onChange }) => {
  const [classes, setClasses] = useState([styles.searchbar]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles.containerIn]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>
        <TextInput placeholder='Search....' onChange={(e) => onChange(e.target.value)} value={value} />
      </div>
    </div>
  );
};
export default Search;
