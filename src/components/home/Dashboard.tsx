import { FC, useState } from 'react';
import useDebounce from '@hooks/useDebounce';
import Searchbar from './Searchbar';
import Recommended from './Recomended';

const Dashboard: FC = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce(searchText, 500);

  return (
    <>
      <Searchbar value={searchText} onChange={setSearchText} />
      {debouncedValue !== '' && <Recommended title='Your Search' searchText={debouncedValue} />}
      <Recommended title='Recomended for you' />
      <Recommended title='Top Rated' />
    </>
  );
};

export default Dashboard;
