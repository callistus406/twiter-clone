import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function SearchBar() {
  function toggleShow() {
    var el = document.getElementById("box");
    el.classList.toggle("show");
  }
  return (
    <div className="length">
      <div className="p-cont">
        <div class="container">
          <input
            type="text"
            id="box"
            placeholder="Search Twitter ..."
            class="search__box"
          />
          {/* <i
          class="fas fa-search search__icon"
          id="icon"
          onClick={toggleShow}
        ></i> */}
          <span className="twitter-icon">
            <FontAwesomeIcon
              icon={faSearch}
              // size="2x"
              style={{ color: "#fff" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
