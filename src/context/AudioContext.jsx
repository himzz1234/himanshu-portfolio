import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext(null);

export default function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [src, setSrc] = useState("/audio/ambience-day.mp3");
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.15);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    return () => audioRef.current.pause();
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    const { current: audio } = audioRef;

    audio.pause();
    audio.src = src;
    audio.load();
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    }
  }, [src]);

  useEffect(() => {
    if (!audioRef.current) return;
    playing
      ? audioRef.current.play().catch(() => setPlaying(false))
      : audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    console.log("Toggling audio");
    setPlaying((p) => !p);
  };

  const playTrack = (newSrc) => {
    setSrc(newSrc);
    setPlaying(true);
  };

  const value = {
    playing,
    toggle,
    setPlaying,
    playTrack,
    src,
    volume,
    setVolume,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside <AudioProvider>");
  return ctx;
};
