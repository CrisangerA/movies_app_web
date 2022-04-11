import dynamic from 'next/dynamic';

const Searchbar = dynamic(() => import('./Searchbar'));
const Recommended = dynamic(() => import('./Recomended'));
const Dashboard = dynamic(() => import('./Dashboard'));

export { Searchbar, Recommended, Dashboard };
