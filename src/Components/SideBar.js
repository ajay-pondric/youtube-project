import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return pattern
  if(!isMenuOpen) return null;

  return(
    <div className="slide-bar">
      <div className="side-menu">
        <ul>
          <Link to="/"><li> <span className="material-symbols-outlined"> home </span> home</li></Link>
          <li> short</li>
          <li> subscription</li>
        </ul>
        <div className="you">
          <h4>you</h4>
          <ul>
            <li>your channel</li>
            <li><FontAwesomeIcon icon={faClock} /> history</li>
            <li>your video</li>
            <li>watch later</li>
            <li>show more</li>
          </ul>
          <div className="subscription">
            <h4>subscription</h4>
            <ul>
              <li>ajay kumar </li>
              <li>phadi420 </li>
              <li>akshay saini </li>
              <li>sidha sir pe </li>
              <li>manjeet singh </li>
            </ul>
            <div className="explore">
              <h4>explore</h4>
              <ul>
                <li>trending</li>
                <li>shopping</li>
                <li>music</li>
                <li>film</li>
                <li>live</li>
                <li>gaming</li>
                <li>news</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
