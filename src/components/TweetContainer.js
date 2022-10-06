import React from "react";
import "./TweetContainer.css";

function CirclePic() {
  return (
    <div>
      <div className="circle-pic"></div>
    </div>
  );
}
function TweetContainer() {
  return (
    <div>
      <div className="tweet-container">
        <div className="circle-pic-container">
          <CirclePic />
        </div>
        {/*  */}
        <div className="cont">
          <div className="username-container"></div>
          <div className="text-container"></div>
          <div className="icon-container"></div>
        </div>
      </div>
    </div>
  );
}

export default TweetContainer;
