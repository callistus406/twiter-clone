import React from "react";
import "./ChildTrends.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
function ChildTrends(props) {
  return (
    <div>
      <div className="child-trends-container">
        <div className="top">
          {" "}
          <span>{props.top}</span>
          <div className="options">
            {" "}
            <div>
              <FontAwesomeIcon icon={faEllipsisH} size="xs" />
            </div>
          </div>
        </div>
        <div className="middle">
          <span>{props.middle}</span>
        </div>
        <div className="end">
          <span>{props.end}</span>
        </div>
      </div>
    </div>
  );
}

export default ChildTrends;
