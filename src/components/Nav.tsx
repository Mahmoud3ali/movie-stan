import Link from "next/link";
import { GENRES } from "../services/utils";

const Nav = () => {
  const navTitles = Object.entries(GENRES);
  return (
    <nav className="relative">
      <div className="flex space-x-4 overflow-x-scroll whitespace-nowrap text-2xl scrollbar-hide">
        {navTitles.map(([key, { title }]) => (
          <Link key={key} href={`/?genre=${key}`}>
            <h2
              className="transform cursor-pointer transition duration-100 first:pl-5 last:pr-10 hover:scale-125 hover:text-white active:text-red-500 "
              key={key}
            >
              {title}
            </h2>
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Nav;
