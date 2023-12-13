import React from "react";
import { PiHouse } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import Link from "next/link";
import { AsideListPlaylists } from '../playlists/aside-list-playlists';

const Aside = () => {
  return (
    <aside className="text-aside-color font-medium w-aside p-2 pb-0">
      <section className="bg-main p-5 mb-2 flex flex-col items-start gap-4 text-lg rounded-lg">
        <Link href="/" className="flex items-center gap-5 w-full hover:text-white transition-all">
          <i className="text-2xl">
          <PiHouse />
          </i>
          Inicio
        </Link>
        <button className="flex items-center gap-5 w-full hover:text-white transition-all">
          <i className="text-2xl">
          <FiSearch />
          </i>
          Buscar
        </button>
      </section>
      <section className="bg-main h-[84.9%] w-full p-5 pb-0 flex flex-col rounded-lg">
        <div className="flex items-center gap-2">
          <i className="text-2xl"><LuLibrary /></i>
          <p>Tu biblioteca</p>
        </div>
        <div className="mt-5 bg-main h-full min-h-min-playlist-aside max-h-max-playlist-aside overflow-y-scroll">
          <AsideListPlaylists />
        </div>
      </section>
    </aside>
  );
};

export default Aside;
