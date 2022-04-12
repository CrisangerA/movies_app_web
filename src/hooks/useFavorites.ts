import { useContext } from 'react';
import { FavoritesContext } from 'src/context/FavoritesContext';

const useFavorites = () => useContext(FavoritesContext);

export default useFavorites;
