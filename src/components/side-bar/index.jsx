import React from "react";
import { UserChat } from "../side-bar/user-chat";

const chatDetails = [
  {
    id: 1,
    profilePic: "images/profile-pic.svg",
    username: "hello kos",
    messageTime: "15:30 PM",
    isOnline: true,
    message: "Yeah!",
  },
  {
    id: 2,
    profilePic: "images/profile-pic.svg",
    username: "hihi kos",
    messageTime: "20 JUN",
    isOnline: false,
    message: "Counting your chicken before..",
  },
  {
    id: 3,
    profilePic: "images/profile-pic.svg",
    username: "yoyo kos",
    messageTime: "15 JAN",
    isOnline: false,
    message: "Do You Think Motivational Thoughts…",
  },
];

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
