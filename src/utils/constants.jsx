const googleApiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  googleApiKey;
