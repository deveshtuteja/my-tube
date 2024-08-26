import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  if (!info) {
    // Handle the case where info is undefined or null
    return null;
  }
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen)
    return (
      <div className="py-2 px-4 m-2 w-[286px] shadow-md hover:shadow-xl bg-center ">
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-xl"
        />
        <ul>
          <li className="font-bold py-1">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    );
  return (
    <div className="py-2 px-4 m-2 w-[264px] shadow-md hover:shadow-xl bg-center">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-xl" />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
