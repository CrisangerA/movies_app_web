/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FC, useEffect, useState } from 'react';
import cookieService from 'src/services/cookie.service';

interface IFavoritesContext {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const initialState: IFavoritesContext = {
  favorites: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
  isFavorite: (id: string) => false,
};

const SearchContext = createContext<IFavoritesContext>(initialState);

const SearchProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(initialState.favorites);
  useEffect(() => {
    const res = cookieService.getFavorites();
    if (res.length > 0) {
      setFavorites(res);
    }
  }, []);

  const addFavorite = (movie: string) => {
    const newState = [...favorites, movie];
    cookieService.setCookie('favorites', JSON.stringify(newState), 1);
    setFavorites(newState);
  };

  const removeFavorite = (id: string) => {
    const newState = favorites.filter((f) => f !== id);
    setFavorites(newState);
    cookieService.setCookie('favorites', JSON.stringify(newState), 1);
  };

  const isFavorite = (id: string) => favorites.find((f) => f === id) !== undefined;

  return (
    <SearchContext.Provider
      value={{
        ...initialState,
        addFavorite,
        removeFavorite,
        favorites,
        isFavorite,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export { SearchContext, SearchProvider };
