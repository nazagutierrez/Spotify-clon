import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs: null},
    volume: 1,
    stateAudioRef: { src: null, volume: null, play: null},
    setStateAudioRef: (stateAudioRef) => set({ stateAudioRef }),
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic })
}))