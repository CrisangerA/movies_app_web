import { DashboardLayout, Dashboard } from '@components/index';
import { Movie } from '@models/index';
import movieService from '@services/movie.service';
// types
import type { NextPage } from 'next';

interface HomeProps {
  discover: Movie[];
  topRated: Movie[];
}

const Home: NextPage<HomeProps> = ({ discover = [], topRated = [] }) => (
  <DashboardLayout
    title='Movies App'
    description='The most complete website to know about your favorite movies'
  >
    <Dashboard discover={discover} topRated={topRated} />
  </DashboardLayout>
);
export async function getStaticProps() {
  const discover = await movieService.getRecomended();
  const topRated = await movieService.getTopRated();
  return { props: { discover: discover.results, topRated: topRated.results } };
}

export default Home;
