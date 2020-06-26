import React from "react";

const chatDetails = [
  {
    id: 1,
    profilePic: "images/profile-pic.svg",
    username: "hello kos",
    messageTime: "15:30 PM",
    online: true,
    message: "Yeah!",
  },
  {
    id: 2,
    profilePic: "images/profile-pic.svg",
    username: "hihi kos",
    messageTime: "20 JUN",
    online: false,
    message: "Counting your chicken before..",
  },
  {
    id: 3,
    profilePic: "images/profile-pic.svg",
    username: "yoyo kos",
    messageTime: "15 JAN",
    online: false,
    message: "Do You Think Motivational Thoughts…",
  },
];

export const UserChat = (props) => (
  <>
    <div className="user-chat-container">
      <div className="first-row">
        <div className="profile-pic">
          <img src={props.chatDetail.profilePic} />
          {props.chatDetail.online && <div className="circle-status"></div>}
        </div>
        <p id="username"> {props.chatDetail.username}</p>
        <p id="message-time"> {props.chatDetail.messageTime}</p>
      </div>
      <div className="latest-message">
        <p>{props.chatDetail.message} </p>
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

export const SideBar = () => (
  <>
    <div className="side-bar-component">
      <div className="search-container">
        <input
          type="text"
          name="query-user-chat"
          placeholder="Search for user"
        />
        <button>
          <img src="images/navbar-assets/icon-search.svg" />
        </button>
      </div>

      <div className="chat-history">
        {chatDetails.map((chatDetail) => {
          return <UserChat chatDetail={chatDetail} key={chatDetail.id} />;
        })}
      </div>
    </div>
    <style jsx>{`
      .side-bar-component {
        display: flex;
        flex-direction: column;
        width: 22%;
        height: 90vh;
      }
      .search-container {
        display: flex;
        justify-content: space-around;
        border: 1px solid #e5e6ef;
        border-left: none;
        height: 15%;
      }
      .search-container input,
      .search-container button {
        border: none;
        background-color: transparent;
        outline: none;
      }
      .chat-history {
        overflow: scroll;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 72%;
      }
    `}</style>
  </>
);
