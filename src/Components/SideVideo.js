
const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 100000) {
    return (count / 1000).toFixed(1) + 'K';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  } else {
    return count.toString();
  }
};

const SideVideo = ({videos}) => {
  
  return(
    <div className="side-video">
      <div className="side-thumbnails">
          <img className="side-thumbnail" src={videos?.snippet?.thumbnails?.default?.url} alt="Thumbnail" />
        </div>
        <div className="side-title">
          <h6 className="side-heading">{videos?.snippet?.title}</h6>
          <span>{videos?.snippet?.channelTitle}</span>
          <span>{formatViewCount(videos?.statistics?.viewCount)} views</span>
          </div>
    </div>
  );
};

export default SideVideo;
