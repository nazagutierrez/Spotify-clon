"use client";

import { usePlayerStore } from "@/app/store/playerStore";
import React, { useEffect, useRef, useState } from "react";
import {BsFillPauseFill, BsFillPlayFill} from "react-icons/bs";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";
import { SongControl } from "./components/SongControl";
import { VolumeControl } from "./components/VolumeControl";
import { CurrentSong } from "./components/CurrentSong";

const Player = () => {
  const { isPlaying, setIsPlaying, currentMusic, volume, stateAudioRef, setStateAudioRef } = usePlayerStore(state => state)
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    isPlaying
    ? audioRef.current?.play()
    : audioRef.current?.pause()
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current)
    audioRef.current.volume = volume
  }, [volume])

  // useEffect(() => {
  //   if (audioRef.current === null) return
  //     const { src, volume, play, } = audioRef.current
  //     setStateAudioRef({src, volume, play})
  //     console.log("estado actualizado");
  // }, [audioRef.current?.src])

  // useEffect(() => {
  //   console.log("stateAudioRef" ,stateAudioRef);
  // }, [stateAudioRef])
  

  useEffect(() => {
    const { song, playlist, songs} = currentMusic
    // console.log(song, playlist, songs);
    if (song && audioRef.current) {
      // const src = `/assets/audio/${playlist.genre}/${}`
      audioRef.current.src = song.src
      audioRef.current.volume = volume
      audioRef.current.play()

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMusic])
  
  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <footer className="text-white flex justify-between items-center rounded-xl mx-2 px-9 mb-2 h-20">
      
      <CurrentSong { ... currentMusic.song } />

      <section className="flex flex-col items-center gap-1">
        <div className="flex text-2xl items-center gap-5">
          <button disabled={currentMusic.song === null} className="disabled:opacity-50 hover:opacity-75 transition-all">
            <IoIosSkipBackward />
          </button>
          <button onClick={handleClick} disabled={currentMusic.song === null} className="disabled:opacity-50 hover:opacity-75 transition-all">
            <i className="text-4xl">
              {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </i>
          </button>
          <button disabled={currentMusic.song === null} className="disabled:opacity-50 hover:opacity-75 transition-all">
            <IoIosSkipForward />
          </button>
        </div>
        <SongControl audio={audioRef} />
      </section>

      <VolumeControl />
      
      <audio ref={audioRef} />
    </footer>
  );
};

export default Player;
