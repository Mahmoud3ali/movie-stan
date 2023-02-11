export type Movie = {
  id: string;
  title?: string;
  original_name?: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
  overview: string;
  backdrop_path?: string | undefined;
  poster_path?: string | undefined;
  vote_count: number;
};

export type tmdbRequest = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};
