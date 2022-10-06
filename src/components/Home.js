import React,{useState} from "react";
import "./Home.css";
import MyTweet from "./littleComponents/MyTweet";
// remove this from package.json
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import "font-awesome/fonts/";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHashtag,
  faHome,
  faUser,
  faEnvelope,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import TweetContainer from "./TweetContainer";
import SearchBar from "./littleComponents/SearchBar";
import Trends from "./Trends";
import WhoToFollow from "./littleComponents/WhoToFollow";
import DisplayTweet from "../DisplayTweet";
import Msg from "./Messages/Msg";
import DirMsgOptions from "./Messages/DirMsgOptions";
import Profile from "./Profile/Profile";

function Home() {

  let initialState = 0;
  let [state, setState] = useState(initialState);
  const handleActionBtn = (e) => {
    if (e.target.textContent === "SAVINGS") {
      setState((state = 1));
    } else if (e.target.textContent === "CANCEL") {
      setState((state = 2));
    }
  };
  return (
    <div className="parent-container">
      <div className="column1">
        <div className="nav">
          <div>
            <span className="twitter-icon">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#fff" }}
              />
            </span>
          </div>

          <div >
            <li>
              {/* <FontAwesomeIcon icon={faHome} size="lg" /> */}
              {/* <HomeOutlinedIcon /> */}
              <svg
                fill="inherit"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
              >
                <g>
                  <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                </g>
              </svg>
              <span className="separator"></span>

              <span className="text">Home</span>
            </li>
          </div>
          <div>
            <li>
              {" "}
              {/* <FontAwesomeIcon icon={faHashtag} size="lg" /> */}
              <svg
                fill="inherit"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
              >
                <g>
                  <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                </g>
              </svg>
              <span className="separator"></span>
              <span className="text">Explore</span>
            </li>
          </div>
          <div>
            <li>
              {/* <FontAwesomeIcon icon={faBell} size="lg" /> */}
              <svg
                fill="inherit"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
              >
                <g>
                  <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
                </g>
              </svg>
              <span className="separator"></span>
              <span className="text">Notifications</span>
            </li>
          </div>
          <div>
            <li>
              {" "}
              {/* <FontAwesomeIcon icon={faUser} size="lg" /> */}
              <svg
                fill="inherit"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
              >
                <g>
                  <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                </g>
              </svg>
              <span className="separator"></span>
              <span className="text">Profile</span>
            </li>
          </div>
          <div>
            <li>
              {" "}
              {/* <FontAwesomeIcon icon={faEnvelope} size="lg" /> */}
              <svg
                fill="inherit"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
              >
                <g>
                  <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                </g>
              </svg>
              <span className="separator"></span>
              <span className="text">Messages</span>
            </li>
          </div>
          <div>
            <li>
              {" "}
              {/* <FontAwesomeIcon icon={faEllipsisH} size="lg" /> */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="svg"
                fill="inherit"
              >
                <g>
                  <circle cx="17" cy="12" r="1.5"></circle>
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="7" cy="12" r="1.5"></circle>
                  <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                </g>
              </svg>
              <span className="separator"></span>
              <span className="text">More</span>
            </li>
          </div>
          <div>
            <button className="tweet-btn">Tweet</button>
          </div>
        </div>
      </div>
      <div className="column2">
        <div className="header">
          <span>Home</span>
          <div className="top-tweets">
            {/* circle div */}
            <div>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="inherit"
                class=""
              >
                <g>
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <MyTweet />
        </div>
        <div>{/* <TweetContainer /> */}</div>
        <div>
          <DisplayTweet />
        </div>

        {/* <Msg /> */}

        {/* add dirmessage to the third column  */}
        {/* <DirMsgOptions /> */}
        {/* <Profile /> */}
      </div>
      <div className="column3">
        <SearchBar />
        <Trends text="Trends for you" />
        <WhoToFollow />

        <Trends text="Topics to follow" />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
      </div>
    </div>
  );
}

export default Home;
