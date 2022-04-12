import dynamic from 'next/dynamic';

const Page = dynamic(() => import('./layout/Page'));
const DashboardLayout = dynamic(() => import('./layout/DashboardLayout'));
const BottomNavbar = dynamic(() => import('./layout/BottomNavbar'));
const ButtonFavorites = dynamic(() => import('./ButtonFavorites'));
const MovieCard = dynamic(() => import('./MovieCard'));
const Animation = dynamic(() => import('./Animation'));
const Slider = dynamic(() => import('./Slider'));

export { Page, BottomNavbar, ButtonFavorites, DashboardLayout, MovieCard, Animation, Slider };
