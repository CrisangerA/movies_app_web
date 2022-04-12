import { useContext } from 'react';
import { SearchContext } from 'src/context/SearchContext';

// ----------------------------------------------------------------------

const useFavorites = () => useContext(SearchContext);

export default useFavorites;
