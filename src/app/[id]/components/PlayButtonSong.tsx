"use client";

import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { usePlayerStore }  from "@/app/store/playerStore"
import { Song } from "@/db/localDatabase";

const PlayButtonSong = ({ params, playlistSongs }: { params:number | string, playlistSongs: Song[] }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)
  
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == params
  // const isPlayingSong = isPlaying && currentMusic?.playlist.id == params
  console.log(playlistSongs);
  
  
  const handleClick = () => {
    if (isPlayingPlaylist) {
        setIsPlaying(false)
        return
    }

    fetch(`/api/get-info-playlist?id=${params}`)
        .then(res => res.json())
        .then(data => {
            const {songs, playlist} = data
            setIsPlaying(true)
            if (currentMusic.playlist?.id === playlist?.id) return
            setCurrentMusic({songs, playlist, song: songs[0]})
        })
  }

  return (
    <button
      className="text-gray-300 text-2xl flex items-center hover:text-gray-500 transition-all hover:scale-105 "
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <BsFillPauseFill /> : <BsFillPlayFill />}
    </button>
  );
};

export default PlayButtonSong;
