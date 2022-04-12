import { Dispatch, FC, SetStateAction } from 'react';
import { TextInput } from '@components/@form';
import { Animation } from '@components/shared';
import styles from './searchbar.module.css';

interface SearchProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ value, onChange }) => (
  <Animation from='right'>
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <TextInput placeholder='Search....' onChange={(e) => onChange(e.target.value)} value={value} />
      </div>
    </div>
  </Animation>
);
export default Search;
