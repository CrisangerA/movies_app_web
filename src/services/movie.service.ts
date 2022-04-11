/* eslint-disable class-methods-use-this */
import MOVIES_API from '@shared/api.routes';
import axiosService from 'src/services/axios.service';
import { ActorAPI, Movie, MovieAPI } from '@models/index';

class MovieService {
  getRecomended = () => axiosService.get<MovieAPI>(MOVIES_API.discover);

  getTopRated = () => axiosService.get<MovieAPI>(MOVIES_API.movie('').topRated);

  getActors = (movieId: string) => axiosService.get<ActorAPI>(MOVIES_API.movie(movieId).actors);

  getMovie = (movieId: string) => axiosService.get<Movie>(MOVIES_API.movie(movieId).details);
}
const movieService = new MovieService();
export default movieService;
