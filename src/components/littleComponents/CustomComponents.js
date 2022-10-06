import React from "react";
import "./CustomComponents.css";
function CustomComponents() {
  return (
    <div className="who-to-follow-container">
      <div className="to-follow">
        <div className="right">
          <div className="div1"></div>
        </div>
        <div className="left">
          <div className="div2">
            {/* content */}
            <div className="content">
              <div>
                <span style={{ color: "#fff" }}>Fireboy DML</span>
              </div>
              <div>
                <span style={{ color: "#61717E" }}>@fireboydml </span>
              </div>
            </div>
          </div>
          <div className="div3">
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomComponents;
