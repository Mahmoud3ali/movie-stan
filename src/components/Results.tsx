import type { Movie } from "../models";
import { Thumbnail } from "./Thumbnail";

interface Props {
  movies: Movie[];
}

const Results: React.FC<Props> = ({ movies }) => {
  return (
    <div className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex">
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
