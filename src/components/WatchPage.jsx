import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_API_URL } from "../utils/constants";
import LiveChat from "./LiveChat";

import RecommendedVideos from "./RecommendedVideos";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const isDarkTheme = useSelector((store) => store.theme.isDark);

  const getVidInfo = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideoInfo(json.items);
  };

  const playingVideo = videoInfo.filter(
    (video) => video.id === searchParams.get("v")
  );
  // console.log(playingVideo[0]);

  useEffect(() => {
    dispatch(closeMenu());
    getVidInfo();
  }, []);

  return (
    <div className="px-4 w-full">
      <div className="flex">
        {/* Main content area with video and comments */}
        <div className="w-[1000px]">
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

          {/* Wrapper for title, stats, and comments */}
          <div className="w-[1000px] dark:bg-black dark:text-white">
            <h1 className="font-bold text-xl py-1">
              {playingVideo[0]?.snippet?.title}
            </h1>
            {playingVideo[0] && (
              <div className="flex justify-between py-1">
                <p className="font-bold">
                  {playingVideo[0]?.snippet?.channelTitle}
                </p>
                <p className="font-bold">
                  {playingVideo[0]?.statistics?.commentCount} comments
                </p>
                <p className="font-bold cursor-pointer">
                  {!isDarkTheme ? (
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg"
                      alt="like"
                      className="w-[22px] h-[20px] mr-1 inline-block"
                    />
                  ) : (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqjKLCaXFELoYyrS1yOM2U6oOR-1JtDiVPQ&s"
                      alt="like"
                      className="w-[24px] h-[24px] mr-1 inline-block rounded-full"
                    />
                  )}
                  {playingVideo[0]?.statistics?.likeCount / 1000}K likes
                </p>
                <p className="font-bold">
                  {playingVideo[0]?.statistics?.viewCount / 1000}K views
                </p>
              </div>
            )}
            <CommentsContainer />
          </div>
        </div>

        {/* Sidebar with live chat and video suggestions */}
        <div className="flex flex-col ml-4 w-full dark:bg-black dark:text-white">
          {/* Live Chat */}
          <LiveChat />

          {/* Suggested Videos */}
          <div className="mt-4 self-center">
            <RecommendedVideos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
