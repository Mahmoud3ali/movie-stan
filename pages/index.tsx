import { GetServerSideProps } from "next";
import { fetchRequest } from "../util/requests";

import Header from "../components/Header";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Requests from "../util/requests";

export interface Movie {
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
}

export interface tmdbRequest {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const Home: React.FC<{ results: Movie[] }> = ({ results }) => {
  return (
    <>
      <Meta title='Movie Stan' />
      <Header />
      <Nav />
      <Results movies={results} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = Array.isArray(context.query.genre)
    ? context.query.genre[0]
    : context.query.genre === undefined
    ? "Trending"
    : context.query.genre;

  const genres: { [key: string]: fetchRequest } = Object.fromEntries(
    Object.entries(Requests)
  );

  const request: tmdbRequest = await fetch(
    `https://api.themoviedb.org/3${genres[genre]?.url || Requests.Trending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
      stri: `https://api.themoviedb.org/3${
        genres[genre]?.url || Requests.Trending.url
      }`,
    },
  };
};

export default Home;
