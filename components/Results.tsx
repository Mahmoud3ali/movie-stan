import { Movie } from "../pages/index";
import Thumbnail from "./Thumbnail";

interface Props {
  movies: Movie[];
}

const Results: React.FC<Props> = ({ movies }) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center'>
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
