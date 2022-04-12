import { DashboardLayout, FavoriteList } from '@components/index';
// types
import type { NextPage } from 'next';

const Favorites: NextPage = () => (
  <DashboardLayout
    title='Movies App | My Favorites'
    description='The most complete website to know about your favorite movies'
  >
    <h1>Your favorite movies</h1>
    <FavoriteList />
  </DashboardLayout>
);

export default Favorites;
