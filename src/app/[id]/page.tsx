import { playlists, songs } from "@/db/localDatabase";
import Image from "next/image";
import React from "react";
import SongsTable from "./components/songsTable";

export default function Page({ params }: { params: { id: number | string } }) {
  const selectedPlaylist = playlists.find(
    (playlist) => playlist.id === params.id
  );
  const filteredSongs = songs.filter((song) => song.albumId == params.id);

  return (
    <section className="h-full w-full mt-20 mb-4 rounded-md text-white bg-main">
      <article className="flex flex-col">
        <header className="flex items-center">
          <Image
            src={`${selectedPlaylist?.img}`}
            unoptimized={true}
            width={0}
            height={0}
            alt="img"
            className="w-60 h-60 m-5 object-cover rounded-sm"
          />
          <div>
            <h1 className="text-6xl font-bold mb-5">
              {selectedPlaylist?.title}
            </h1>
            <h3>{selectedPlaylist?.genre}</h3>
          </div>
        </header>
        <div className="mx-10">
          <SongsTable songs={filteredSongs} />
        </div>
      </article>
    </section>
  );
}
