import { DashboardLayout, Dashboard } from '@components/index';
// types
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <DashboardLayout title='Movies App' description='The most complete website to know about your favorite movies'>
    <Dashboard />
  </DashboardLayout>
);

export default Home;
