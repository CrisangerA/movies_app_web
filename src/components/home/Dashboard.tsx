import { FC } from 'react';
import { Movie } from '@modules/movies';
import Searchbar from './Searchbar';
import Recommended from './Recomended';

interface DashboardProps {
  discover: Movie[];
  topRated: Movie[];
}

const Dashboard: FC<DashboardProps> = ({ discover, topRated }) => (
  <>
    <Searchbar />
    <Recommended movies={discover} />
    <Recommended movies={topRated} />
  </>
);

export default Dashboard;
