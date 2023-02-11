import type { GetServerSideProps } from "next";
import { Meta } from "../components";
import { Header } from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import type { Movie, tmdbRequest } from "../models";
import { GENRES } from "../services/utils";

const Home = ({ results }: { results: Movie[] }) => {
  console.log(results);
  return (
    <>
      <Meta title="Movie Stan" description="Website for movies!" />
      <Header />
      <Nav />
      <Results movies={results} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre: string = Array.isArray(context.query.genre)
    ? (context.query.genre[0] as string)
    : context.query.genre === undefined
    ? "Trending"
    : context.query.genre;

  const genres = Object.fromEntries(Object.entries(GENRES));

  const TRENDING_GENRE = GENRES.Trending;

  const request: tmdbRequest = await fetch(
    `https://api.themoviedb.org/3${genres[genre]?.url || TRENDING_GENRE.url}`
  ).then((res) => res.json() as Promise<tmdbRequest>);

  return {
    props: {
      results: request.results,
    },
  };
};

export default Home;
