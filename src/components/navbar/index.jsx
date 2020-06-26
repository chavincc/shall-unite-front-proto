import React from "react";

export const Navbar = ({ username }) => (
  <>
    <div className="navbar">
      <div className="logo-img">
        <img src="images/logo.svg" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          name="query-navbar"
          placeholder="Search keyword... "
        />
        <button>
          <img src="images/navbar-assets/icon-search.svg" />
        </button>
      </div>
      <div className="header-user-actions">
        <div className="user-profile">
          <img src="images/navbar-assets/profile.svg"></img>
          <p>{username}</p>
        </div>
        <div className="seperate-line"></div>
        <div className="header-actions">
          <a href="#" target="_blank">
            <img src="images/navbar-assets/icon-user.svg" />
          </a>
          <a href="#" target="_blank">
            <img src="images/navbar-assets/icon-chat.svg" />
          </a>
          <a class="no-padding" href="#" target="_blank">
            <img src="images/navbar-assets/icon-noti.svg" />
          </a>
        </div>
      </div>
    </div>

    <style jsx>{`
      .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 25px 0;
      }
      .logo-img {
        display: flex;
      }
      .search-bar {
        display: flex;
        align-items: center;
        height: 50px;
        width: 556px;
        background: #fcfbfe;
        border: 1px solid #e5e6ef;
        box-sizing: border-box;
        border-radius: 100px;
        outline: none;
        padding: 0 20px;
      }
      ,
      .search-bar input {
        display: flex;
        justify-content: flex-start;
        background-color: transparent;
        border: transparent;
      }
      .search-bar button {
        display: flex;
        margin-left: auto;
        width: 20px;
        height: 20px;
        border: none;
        background-color: transparent;
      }

      .header-user-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .user-profile {
        display: flex;
      }
      .user-profile p {
        position: absolute;
        font-size: 15px;
        right: 24%;
        color: #3e4559;
      }
      .seperate-line {
        display: flex;
        width: 1px;
        height: 36px;
        left: 1365px;
        top: 34px;
        background: #e5e6ef;
        margin: 0 50px;
      }

      .header-actions {
        display: flex;
        justify-content: space-around;
      }
      .header-actions a {
        padding-right: 30px;
      }
      .no-padding {
        padding-right: 0px;
      }
    `}</style>
  </>
);
