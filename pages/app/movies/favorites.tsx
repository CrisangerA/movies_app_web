import { FavoriteList } from '@components/favorites';
import { BottomNavbar, Page } from '@components/index';
import { LogoutButton } from '@components/login';
// types
import type { NextPage } from 'next';

const Favorites: NextPage = () => (
  <Page
    title='Movies App'
    description='The most complete website to know about your favorite movies'
  >
    <FavoriteList />
    <BottomNavbar />
    <LogoutButton />
  </Page>
);

export default Favorites;
