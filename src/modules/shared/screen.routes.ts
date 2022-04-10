const SCREEN_ROUTES = {
  movies: {
    list: '/app/movies',
    detail: (movieId: string) => `/app/movies/${movieId}`,
    favorites: '/app/movies/favorites',
  },
};
export default SCREEN_ROUTES;
