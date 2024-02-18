import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {  YOU_TUBE_API } from "../utils/Constants";
import SideVideo from "./SideVideo";
import CommentContainer from "./CommentsContainer";
import LiveComment from "./LiveComment";

  const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
   const data = await fetch(YOU_TUBE_API);
   const json = await data.json();
   setVideo(json?.items);
  }
    useEffect(() => {
    dispatch(closeMenu());
  }, []);
   
  return (
    <div className="watch-page">
      <div className="container-fluid">
        <div className="row">
          <div className="column-9">
            <div className="watch-video">
              <iframe className="frame" width="900"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
                <div className="comment-show">
                  <LiveComment />
                <CommentContainer />
                </div>
                </div>
          </div>
          <div className="column-3">
            <div className="other-video">
              {video.map((item) => (<a key={item.id} href={"/watch?v=" +  item.id} ><SideVideo  videos={item}/></a>)) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;



  