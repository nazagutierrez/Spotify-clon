import { usePlayerStore } from "@/app/store/playerStore"
import { useRef } from "react"
import { ImVolumeLow, ImVolumeMedium, ImVolumeMute2 } from "react-icons/im"
import { Slider } from "./Slider"

export const VolumeControl = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const previousVolumeRef = useRef(volume)
  
    const isVolumeSilenced = volume < 0.01
  
    const volumeIcon = () => {
      if (volume < 0.01) {
        return <ImVolumeMute2 />
      } else if (volume >= 0.01 && volume < 0.5) {
        return <ImVolumeLow />
      } else if (volume >= 0.5) {
        return <ImVolumeMedium />
      }
    }
  
    const handleClickVolume = () => {
      if (isVolumeSilenced) {
        setVolume(previousVolumeRef.current)
      } else {
        previousVolumeRef.current = volume
        setVolume(0)
      }
    }
  
    return (
      <div className="flex justify-end gap-x-2 w-[260px]">
        <button className="opacity-90 hover:opacity-60 transition-all" onClick={handleClickVolume}>
          {volumeIcon()}
        </button>
        <Slider 
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[100px]"
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
        />
      </div>
    )
  }