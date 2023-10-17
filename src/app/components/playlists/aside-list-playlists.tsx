import React from "react";
import { AsidePlaylist } from "./aside-playlist";
import { playlists } from '../../../db/localDatabase';

export const AsideListPlaylists = () => {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id} className="my-3">
            <AsidePlaylist img={playlist.img} title={playlist.title} artists={playlist.artists } />
        </li>
      ))}
    </ul>
  );
};

