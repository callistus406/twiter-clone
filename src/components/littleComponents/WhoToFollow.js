import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import ChildTrends from "./littleComponents/ChildTrends";
import CustomComponents from "./CustomComponents";

function WhoToFollow() {
  return (
    <div>
      <div className="trends-container">
        <div className="trends-header">
          <div className="trends-for-you">
            <span>Who to follow </span>
          </div>
          <div className="settings-container">
            {/* rounded container */}
            {/* <div>
              <FontAwesomeIcon
                icon={faCog}
                
              />
            </div> */}
          </div>
        </div>
        <CustomComponents />
        <CustomComponents />
        <CustomComponents />
        <div className="show-more">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
}

export default WhoToFollow;
