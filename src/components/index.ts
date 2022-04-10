import dynamic from 'next/dynamic';

const Page = dynamic(() => import('./Page'));
const Other = dynamic(() => import('./Other'));
const BottomNavbar = dynamic(() => import('./BottomNavbar'));

export { Page, Other, BottomNavbar };
