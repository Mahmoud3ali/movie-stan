import Image from "next/image";
import Icon from "../components/Icon";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header: React.FC = () => {
  return (
    <header className='flex flex-col justify-between items-center sm:flex-row '>
      <div className='flex flex-grow justify-evenly max-w-2xl m-5'>
        <Icon title='Home' Icon={HomeIcon} />
        <Icon title='Trending' Icon={LightningBoltIcon} />
        <Icon title='Verified' Icon={BadgeCheckIcon} />
        <Icon title='Collections' Icon={CollectionIcon} />
        <Icon title='Search' Icon={SearchIcon} />
        <Icon title='Account' Icon={UserIcon} />
      </div>
      <h1 className='font-extrabold text-3xl uppercase mb-10 mr-4'>
        Movie Stan
      </h1>
    </header>
  );
};

export default Header;
