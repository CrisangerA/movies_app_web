import { DashboardLayout, Dashboard } from '@components/index';
import { MovieAPI } from '@models/index';
import movieService from '@services/movie.service';
// types
import type { NextPage } from 'next';

interface HomeProps {
  discover: MovieAPI;
  topRated: MovieAPI;
}

const Home: NextPage<HomeProps> = ({ discover, topRated }) => (
  <DashboardLayout title='Movies App' description='The most complete website to know about your favorite movies'>
    <Dashboard discover={discover} topRated={topRated} />
  </DashboardLayout>
);
export async function getStaticProps() {
  const discover = await movieService.getRecomended('&page=1');
  const topRated = await movieService.getTopRated();
  return { props: { discover, topRated } };
}

export default Home;
