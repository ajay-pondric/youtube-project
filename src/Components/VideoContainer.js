import { useEffect, useState } from "react";
import { YOU_TUBE_API } from "../utils/Constants";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
 
 useEffect(() => {
   getVideos();
 }, []);
 
 const getVideos = async () => {
  const data = await fetch(YOU_TUBE_API);
  const json = await data.json();
  setVideos(json.items);
 }

  return(
    <div className="video-container">
      <div className="container-fluid">
        <div className="row">
        {videos.map((video) => (<VideoCart key={video.id}  info={video}/> ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
