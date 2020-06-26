import React from "react";

export const UserChat = ({
  chatDetail: { profilePic, isOnline, username, messageTime, message },
}) => (
  <>
    <div className="user-chat-container">
      <div className="first-row">
        <div className="profile-pic">
          <img src={profilePic || "images/profile-pic.svg"} />
          {isOnline && <div className="circle-status"></div>}
        </div>
        <p id="username"> {username}</p>
        <p id="message-time"> {messageTime || "13:45"}</p>
      </div>
      <div className="latest-message">
        <p>{message || "lorem ipsum sample text"}</p>
      </div>
    </div>
    <style jsx>
      {`
        .user-chat-container {
          display: flex;
          flex-direction: column;
          height: 117px;
          border: 1px solid #e5e6ef;
          border-left: none;
          border-top: none;
          padding-top: 10px;
        }
        .first-row {
          display: flex;
          padding: 0 20px 0 30px;
          align-items: center;
          justify-content: space-between;
        }
        .circle-status {
          position: absolute;
          width: 10px;
          height: 9px;
          right: 0;
          bottom: 0;
          background: #9be24f;
          border-radius: 50%;
          border: 3px solid #ffffff;
        }
        .profile-pic {
          position: relative;
        }
        .first-row #username {
          display: flex;
          margin: 0px;
          color: #1e1e1e;
          width: 50%;
        }
        .first-row #message-time {
          color: #bebbc6;
        }
        .latest-message {
          display: flex;
          align-items: center;
          padding-left: 30px;
          color: #3e4559;
        }
      `}
    </style>
  </>
);
