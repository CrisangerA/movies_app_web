import { BottomNavbar, Page } from '@components/index';
import { Recommended, Searchbar } from '@components/home';
import { movieService, Movie } from '@modules/movies';
import { LogoutButton } from '@components/login';
// types
import type { NextPage } from 'next';

interface HomeProps {
  discover: Movie[];
  topRated: Movie[];
}

const Home: NextPage<HomeProps> = ({ discover = [], topRated = [] }) => (
  <Page
    title='Movies App'
    description='The most complete website to know about your favorite movies'
  >
    <Searchbar />
    <Recommended movies={discover} />
    <Recommended movies={topRated} />
    <BottomNavbar />
    <LogoutButton />
  </Page>
);
export async function getStaticProps() {
  const discover = await movieService.getRecomended();
  const topRated = await movieService.getTopRated();
  return { props: { discover: discover.results, topRated: topRated.results } };
}

export default Home;
