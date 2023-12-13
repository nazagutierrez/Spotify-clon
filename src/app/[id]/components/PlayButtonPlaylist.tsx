"use client";

import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { usePlayerStore }  from "@/app/store/playerStore"

const PlayButtonPlaylist = ({ params }: { params:number | string }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)
  
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == params

  
  
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
      className="rounded-full bg-green-500 mt-7 text-3xl p-5 text-black hover:bg-green-600 transition-all hover:scale-105 "
      onClick={handleClick}
    >
      {isPlayingPlaylist ? <BsFillPauseFill /> : <BsFillPlayFill />}
    </button>
  );
};

export default PlayButtonPlaylist;
