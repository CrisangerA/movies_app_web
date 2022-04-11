interface Genres {
  id: string;
  name: string;
}
interface ProductionCompanies {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface Movie {
  id: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  adult: boolean;
  tagline: string;
  release_date: string;
  production_companies: ProductionCompanies[];
  popularity: number;
  genres: Genres[];
}
export interface MovieAPI {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Actor {
  id: string;
  adult: boolean;
  name: string;
  profile_path: string;
  popularity: number;
  character: string;
}

export interface ActorAPI {
  id: string;
  cast: Actor[];
}
export interface Video {
  site: string;
  key: string;
  name: string;
}
export interface VideoAPI {
  id: string;
  results: Video[];
}
