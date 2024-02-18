import { Link } from "react-router-dom";


const formatViewCount = (count) =>
  count >= 1000000 ? (count / 1000000).toFixed(1) + 'M'
    : count >= 100000 ? (count / 1000).toFixed(1) + 'K'
    : count >= 1000 ? (count / 1000).toFixed(1) + 'K'
    : count.toString();


const VideoCart = ({ info }) => {
  return (
    
      <div className="column-4">
        <a href={"/watch?v=" + info.id}>
      <div className="video-cart">
        <div className="video-thumbnail">
          <img src={info?.snippet?.thumbnails?.high?.url} alt="Thumbnail" />
        </div>
        <div className="video-title">
          <h5 className="title">{info?.snippet?.title}</h5>
          <span>{info?.snippet?.channelTitle}</span>
          <span>{formatViewCount(info?.statistics?.viewCount)} views   </span>
        </div>
      </div>
      </a>
    </div>
  );
};

export default VideoCart;
