import React from "react";
import "./Trends.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ChildTrends from "./littleComponents/ChildTrends";
function Trends(props) {
  return (
    <div>
      <div className="trends-container">
        <div className="trends-header">
          <div className="trends-for-you">
            <span> {props.text} </span>
          </div>
          <div className="settings-container">
            {/* rounded container */}
            <div>
              <FontAwesomeIcon
                icon={faCog}
                // size="2x"
                // style={{ color: "#fff" }}
              />
            </div>
          </div>
        </div>
        <ChildTrends
          middle="#Hushpupi"
          top="Movies Trending"
          end="8,299 Tweets"
        />
        <ChildTrends
          middle="#Manchester
          
          "
          top="Football Trending"
          end="121,299k Tweets"
        />
        <div className="show-more">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
}

export default Trends;
