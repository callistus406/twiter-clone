import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./DirMsgOptions.css";
import { StylesProvider } from "@material-ui/styles";

function DirMsgOptions() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function MsgOptions(props) {
    return (
      <div className="d-msg-option">
        <div>
          <div className="check-box">
            {" "}
            <p>{props.msgHeading}</p>
            <div>
              <StylesProvider injectFirst>
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </StylesProvider>
            </div>
          </div>

          <p className="inner-text">
            {props.msgContent}
            <a href={props.link}> Learn more</a>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="dir-msg-options">
        <div className="head">
          <div className="icon-text">
            <div className="svg-cont">
              <div className="div-non">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="inherit"
                  class="d-msg-svg"
                >
                  <g>
                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                  </g>
                </svg>
              </div>
            </div>

            <div className="div-last">
              <span>Direct Messages</span>
            </div>
          </div>
        </div>
        <div className="place-holder">
          <span>Manage who can message you directly.</span>
        </div>
        <MsgOptions
          msgHeading="Allow message requests from everyone"
          msgContent=" Let people who you don’t follow send you message requests and add
            you to group conversations. To reply to their messages, you need to
            accept the request."
          link=""
        />
        <MsgOptions
          msgHeading="Filter low-quality messages"
          msgContent="Hide message requests that have been detected as being potentially spam or low-quality. These will be sent to a separate inbox at the bottom of your message requests. You can still access them if you want."
          link=""
        />
        <MsgOptions
          msgHeading="Show read receipts"
          msgContent="Let people you’re messaging with know when you’ve seen their messages. Read receipts are not shown on message requests."
          link=""
        />
      </div>
    </div>
  );
}

export default DirMsgOptions;
