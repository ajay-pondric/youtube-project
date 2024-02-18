import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { APP_LOGO, SEARCH_API } from "../utils/Constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]) {
      return setSearchSuggestions(searchCache[searchQuery])
    } else {
      return  getSearchSuggestions() ;
    }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header">
      <div className="Container">
        <div className="row align-center">
          <div className="column-2">
            <div className="logo">
              <img
                onClick={() => toggleMenuHandler()}
                className="ham-burger"
                src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png"
                alt="menu"
              />
              <div className="app-logo">
                <a href="/">
                  <img src={APP_LOGO} alt="App-logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="column-8">
            <div
              className="search-bar"
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
            >
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <button className="search-button">Search</button>
            </div>
            {isHovered && (
              <div className="search-suggestion">
                <ul className="search">
                  {searchSuggestions.map((s) => (
                    <li key={s}>
                      <FontAwesomeIcon className="search-icon" icon={faSearch} /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="column-2">
            <div className="user-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="user-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
