import type { Movie } from "../models";

import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const BASE_URL = "https://image.tmdb.org/t/p/original";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const Thumbnail = ({ movie }: { movie: Movie }) => {
  return (
    <div className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105">
      <Image
        alt={movie.overview}
        src={`${BASE_URL}${movie.poster_path || movie.backdrop_path || ""}`}
        width={450}
        height={670}
        className="height-auto max-w-full"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 670))}`}
      />

      <div className="p-2">
        <p className="max-w-md truncate">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && movie.media_type}
          {movie.release_date || movie.first_air_date}
          <HandThumbUpIcon className="mx-2 h-5" /> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};
