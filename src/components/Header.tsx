import { Icon } from "./Icon";

import {
  HomeIcon,
  CheckBadgeIcon,
  BoltIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row">
      <div className="max-w m-5 flex flex-grow select-none justify-evenly">
        <Icon title="Home" Icon={HomeIcon} />
        <Icon title="Trending" Icon={BoltIcon} />
        <Icon title="Verified" Icon={CheckBadgeIcon} />
        <Icon title="Collections" Icon={CircleStackIcon} />
        <Icon title="Search" Icon={MagnifyingGlassIcon} />
        <Icon title="Account" Icon={UserIcon} />
      </div>
      <h1 className="mb-10 mr-4 text-3xl font-extrabold uppercase">
        Movie Stan
      </h1>
    </header>
  );
};
