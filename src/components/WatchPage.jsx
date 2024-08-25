import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_API_URL } from "../utils/constants";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const getVidInfo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideoInfo(json.items);
  };
  const playingVideo = videoInfo.filter(
    (video) => video.id == searchParams.get("v")
  );
  console.log(playingVideo[0]);

  useEffect(() => {
    dispatch(closeMenu());
    getVidInfo();
  }, []);
  return (
    <div>
      <div className="px-4">
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-xl py-1">
          {playingVideo[0]?.snippet?.title}
        </h1>
        <div className="flex justify-between py-1">
          <p className="font-bold">{playingVideo[0]?.snippet?.channelTitle}</p>
          <p className="font-bold">
            {playingVideo[0]?.statistics?.commentCount} comments
          </p>
          <p className="font-bold">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg"
              alt="like"
              className="w-[22px] h-[20px] inline-block"
            />
            {playingVideo[0]?.statistics?.likeCount / 100}K likes
          </p>
          <p className="font-bold">
            {playingVideo[0]?.statistics?.viewCount / 100}K views
          </p>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
