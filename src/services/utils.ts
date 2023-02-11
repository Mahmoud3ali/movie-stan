const API_KEY: string = process.env.NEXT_API_KEY || "";

export interface fetchRequest {
  title: string;
  url: string;
}

const Trending: fetchRequest = {
  title: "Trending",
  url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};
const Popular: fetchRequest = {
  title: "Popular",
  url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
};
const Action: fetchRequest = {
  title: "Action",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};
const Comedy: fetchRequest = {
  title: "Comedy",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
};
const Horror: fetchRequest = {
  title: "Horror",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
};
const Romance: fetchRequest = {
  title: "Romance",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};
const Mystery: fetchRequest = {
  title: "Mystery",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
};
const SciFi: fetchRequest = {
  title: "Sci-Fi",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};
const Western: fetchRequest = {
  title: "Western",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};
const Animation: fetchRequest = {
  title: "Animation",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};
const TV: fetchRequest = {
  title: "TV Movie",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export const GENRES = {
  Trending,
  Popular,
  Action,
  Comedy,
  Horror,
  Romance,
  Mystery,
  SciFi,
  Western,
  Animation,
  TV,
} as const;
