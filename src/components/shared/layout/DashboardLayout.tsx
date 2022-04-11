import { FC } from 'react';
import { LogoutButton } from '@components/login';
import BottomNavbar from './BottomNavbar';
import Page from './Page';

interface PageProps {
  title: string;
  description: string;
}

const DashboardLayout: FC<PageProps> = ({ title, description, children }) => (
  <Page title={title} description={description}>
    {children}
    <BottomNavbar />
    <LogoutButton />
  </Page>
);

export default DashboardLayout;
