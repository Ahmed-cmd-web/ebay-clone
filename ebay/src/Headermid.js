/** @format */

import React from "react";
import "./Headermid.css";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
function Headermid() {
  return (
    <div className="headermid">
      <div className="headermidcontent">
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="dropdown2">
          <h4 className="filter">
            Shop by category <ExpandMoreOutlinedIcon className="arrow" />{" "}
          </h4>
          <div className="dropdowncontent">
            <div className="row">
              <div className="category">
                <div className="dropdowncontentheader">
                  Collectibles & art <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Collectibles </a>
                <a href="ex">Antiques</a>
                <a href="ex">Sports memorabilia</a>
                <a href="ex">Art</a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Electronics <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Computers & tablets</a>
                <a href="ex">Cameras & photo</a>
                <a href="ex">TV,audio & surveilliance</a>
                <a href="ex">Cell phones & accessories</a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Fashion <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Women</a>
                <a href="ex">Men</a>
                <a href="ex">Jewelery & watches</a>
                <a href="ex">Shoes</a>
              </div>
            </div>
            <div className="row">
              <div className="category">
                <div className="dropdowncontentheader">
                  Home & garden <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Yard,garden & outdoor</a>
                <a href="ex">Crafts</a>
                <a href="ex">Home improvement</a>
                <a href="ex">Pet supplies</a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Auto Parts & Accessories{" "}
                  <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">GPS & Security Devices</a>
                <a href="ex">Radar & Laser Detectors</a>
                <a href="ex">Care & Detailling</a>
                <a href="ex">Scooter Parts & Accessories </a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Musical instruments & gear{" "}
                  <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Guitar</a>
                <a href="ex">Pro audio equipment</a>
                <a href="ex">string</a>
                <a href="ex">Stage lighting & effects</a>
              </div>
            </div>
            <div className="row">
              <div className="category">
                <div className="dropdowncontentheader">
                  Sporting goods <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Outdoor sports</a>
                <a href="ex">Team sports</a>
                <a href="ex">Exercise & fitness</a>
                <a href="ex">golf</a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Toys & hobbies <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Radio control</a>
                <a href="ex">Kids toys</a>
                <a href="ex">Action figures</a>
                <a href="ex">Dolls & bears</a>
              </div>
              <div className="category">
                <div className="dropdowncontentheader">
                  Other categories <ChevronRightIcon className="rightarr" />
                </div>
                <a href="ex">Video games & consoles</a>
                <a href="ex">Health & beauty</a>
                <a href="ex">Baby</a>
                <a href="ex">Business & industrial</a>
              </div>
            </div>
          </div>
        </div>

        <input
          type="text"
          className="search"
          placeholder=" 🔍 Search for anything"
          results="0"
        />
        <button className="submit">
          <span className="searchplace">Search</span>
          <span className="magnifier">
            <SearchSharpIcon />
          </span>
        </button>
        <a href="ex" className='adv'>Advanced</a>
      </div>
    </div>
  );
}

export default Headermid;
