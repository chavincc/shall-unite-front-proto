import React from "react";
export const UserChat = () => (
  <>
    <div className="user-chat-container">
      <div className="first-row">
        <img src="images/profile-pic.svg" />
        <p id="username"> hello kos</p>
        <p id="message-time"> 13:30 PM</p>
      </div>
      <div className="latest-message">
        <p> Yeah! </p>
      </div>
    </div>
    <style jsx>
      {`
        .user-chat-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 117px;
          border: 1px solid #e5e6ef;
          border-left: none;
          border-top: none;
          padding-top: 10px;
        }
        .first-row {
          display: flex;
          justify-content: space-between;
          padding: 0 20px 0 30px;
          align-items: center;
        }
        .first-row #username {
          display: flex;
          padding: 0 10px 0 15px;
          color: #1e1e1e;
        }
        .first-row #message-time {
          display: flex;
          justify-self: end;
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
        <UserChat />
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
