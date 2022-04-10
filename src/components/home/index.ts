import dynamic from 'next/dynamic';

const Searchbar = dynamic(() => import('./Searchbar'));
const Recommended = dynamic(() => import('./Recomended'));

export { Searchbar, Recommended };
