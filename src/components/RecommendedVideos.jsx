import { useEffect, useState } from "react";
import { YOUTUBE_US_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  const [usVideos, setUsVideos] = useState([]);
  const getUsVideos = async () => {
    const data = await fetch(YOUTUBE_US_API_URL);
    const json = await data.json();
    setUsVideos(json.items);
  };
  useEffect(() => {
    getUsVideos();
  }, []);

  return (
    <div>
      {usVideos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default RecommendedVideos;
