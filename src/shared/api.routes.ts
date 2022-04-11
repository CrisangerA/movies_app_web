const MOVIES_API = {
  root: 'https://api.themoviedb.org/3',
  discover: '/discover/movie',
  movie: (movie_id: string) => ({
    topRated: '/movie/top_rated',
    details: `/movie/${movie_id}`,
    actors: `/movie/${movie_id}/credits`,
  }),
};

export default MOVIES_API;
