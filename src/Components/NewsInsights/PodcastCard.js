import React, { useState, useRef, useEffect } from "react";
//import { play, pause } from "../Home/utils/Icon"; // Import all icons
import { AiOutlineAudioMuted } from "react-icons/ai";

const PodcastCard = ({ podcastDetails }) => {
  const { formattedDate, imageUrl, title, podcastexcerpt, player_link } = podcastDetails;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1.0); // Initial volume set to maximum
  const [isMuted, setIsMuted] = useState(false); // State to manage mute/unmute

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      audioRef.current.volume = volume; // Unmute and set volume back to original
    } else {
      audioRef.current.volume = 0; // Mute the audio
    }
    setIsMuted(!isMuted); // Toggle mute state
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <li className="w-full md:w-full h-auto shadow-lg mx-auto">
      {/* First Row: Image */}
      <div className="flex justify-center">
        <img
          src={imageUrl}
          className="w-3/10 h-auto mx-auto"
          alt="Podcast cover"
        />
      </div>

      {/* Second Row: Title and Excerpt */}
      <div className="p-4">
        <h1 className="text-custom-blue text-center md:text-start text-xl md:text-2xl font-semibold mb-4">
          {title.rendered}
        </h1>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: podcastexcerpt }}
        />
      </div>

      {/* Third Row: Controls */}
      <div className="flex items-center justify-between px-4 pb-4">
        <button
          className="bg-custom-blue text-white py-2 px-4 rounded-full hover:bg-custom-red"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="flex-1 mx-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <AiOutlineAudioMuted
          className={`text-red-500 cursor-pointer ${isMuted ? "text-3xl" : ""}`}
          onClick={handleVolumeToggle}
        />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={player_link} className="hidden md:block" />
    </li>
  );
};

export default PodcastCard;
