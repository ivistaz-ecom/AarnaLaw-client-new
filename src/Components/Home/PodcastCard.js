import { pause, play } from "../Home/utils/Icon";
import { useState, useRef } from "react";

const PodcastCard = ({ podcastDetails }) => {
  const { formattedDate, imageUrl, title, player_link } = podcastDetails;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <li className="w-full md:w-[565px] md:h-auto h-40 shadow-lg group transition-colors duration-300 md:hover:bg-custom-blue md:hover:text-white list-none mx-2">
      <div className="flex flex-row items-center h-full">
        {/* Image on the left for all views */}
        <img
          src={imageUrl}
          width={201}
          height={150}
          alt="Podcast Thumbnail"
          className="w-36 h-36 md:w-48 md:h-auto"
        />
        {/* Content on the right */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <h1
            className="text-custom-blue text-start text-lg md:text-2xl font-semibold mb-4 md:group-hover:text-white transition-colors duration-300 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
          {/* Date and Audio Button in the same row */}
          <div className="flex flex-row justify-between items-center">
            <p className="text-custom-gray md:group-hover:text-white transition-colors duration-300 md:w-60 w-30">
              Posted On
              <br className="block md:hidden" />
              {formattedDate}
            </p>

            <button
              className="bg-custom-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 md:group-hover:bg-custom-red"
              onClick={handlePlayPause}
            >
              {isPlaying ? pause : play}
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={player_link} className="hidden md:block" />
    </li>
  );
};

export default PodcastCard;
