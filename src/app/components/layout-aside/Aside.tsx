import React from "react";
import { PiHouse } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";

const Aside = () => {
  return (
    <aside className="h-screen text-aside-color font-medium w-aside p-2">
      <div className="bg-secondary p-5 mb-2 flex flex-col items-start gap-4 text-lg rounded-lg">
        <button className="flex items-center gap-5 w-full hover:text-white transition-all">
          <i className="text-2xl">
          <PiHouse />
          </i>
          Inicio
        </button>
        <button className="flex items-center gap-5 w-full hover:text-white transition-all">
          <i className="text-2xl">
          <FiSearch />
          </i>
          Buscar
        </button>
      </div>
      <div className="w-full p-5 flex flex-col bg-secondary rounded-lg">
        <div className="flex items-center gap-2">
          <i className="text-2xl"><LuLibrary /></i>
          <p>Tu biblioteca</p>
        </div>
        <div>
          {/* Todas las playlists aqui + crear comp list-of-playlists */}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
