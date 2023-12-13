import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import { usePlayerStore } from "@/app/store/playerStore"

export const SongControl = ({ audio } : {audio: any}) => {
    const [currentTime, setCurrentTime] = useState(0)
    const { currentMusic } = usePlayerStore(state => state)

    useEffect(() => {
      audio.current.addEventListener("timeupdate", handleTimeUpdate)
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audio.current.removeEventListener("timeupdate", handleTimeUpdate)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    const formatTime = (time:number) => {
      if (time == null) return `0:00`
        
      const seconds = Math.floor(time % 60)
      const minutes = Math.floor(time / 60)
  
      return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }
  
    const handleTimeUpdate = () => {
      setCurrentTime(audio.current.currentTime)
    }
  
    const duration = audio?.current?.duration ?? 0
  
    return (
      <div className="flex justify-center items-center gap-x-2">
        <span className="text-xs opacity-80 w-12 text-right">{formatTime(currentTime)}</span>
  
        <Slider 
        disabled={currentMusic?.song === null}
        defaultValue={[0]}
        value={[currentTime]}
        max={audio?.current?.duration}
        min={0}
        className="w-[650px] disabled:opacity-50"
        onValueChange={(value) => {
          audio.current.currentTime = value
        }}
        />
  
        <span className="text-xs opacity-80 w-12">{duration ? formatTime(duration) : "0:00"}</span>
      </div>
    )
  }