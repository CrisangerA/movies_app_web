/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import dynamic from 'next/dynamic';

const FavoriteItem = dynamic(() => import('./FavoriteItem'));
const FavoriteList = dynamic(() => import('./FavoriteList'));

export { FavoriteItem, FavoriteList };
