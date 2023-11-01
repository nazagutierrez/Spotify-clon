import * as React from "react";
import { Song } from "@/db/localDatabase";
import { BiTimeFive } from "react-icons/bi";

export default function SongsTable({ songs }: { songs: Song[] }) {
  return (
    <>
      <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
        <thead>
          <tr className="text-zinc-400 text-sm font-light">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2 text-xl"><BiTimeFive /></th>
          </tr>
        </thead>

        <tbody>
          <tr className="h-[16px]"></tr>
          {songs.map((song, index) => (
            <tr
              key={song.id}
              className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"
            >
              <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
                {index + 1}
              </td>
              <td className="px-4 py-2 flex gap-3 max-w-xs min-w-[10rem] md:min-w-[20rem]">
                <picture>
                  <img src={song.img} alt={song.title} className="w-11 h-11" />
                </picture>
                <div className="flex flex-col">
                  <h3 className="text-white text-base font-normal">
                    {song.title}
                  </h3>
                  <span>{song.artists.join(", ")}</span>
                </div>
              </td>
              <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
