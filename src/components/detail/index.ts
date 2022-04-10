import dynamic from 'next/dynamic';

const About = dynamic(() => import('./About'));
const Actors = dynamic(() => import('./Actors'));
const Header = dynamic(() => import('./Header'));

export { About, Actors, Header };
