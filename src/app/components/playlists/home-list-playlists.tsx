import React from "react";
import { playlists } from '../../../db/localDatabase';
import { HomePlaylist } from "./home-playlist";

export const HomeListPlaylists = () => {
  return (
    <ul className="flex w-full flex-wrap mt-2">
      {playlists.map((playlist) => (
        <li key={playlist.id} className="my-3">
            <HomePlaylist id={playlist.id} img={playlist.img} title={playlist.title} />
        </li>
      ))}
    </ul>
  );
};
