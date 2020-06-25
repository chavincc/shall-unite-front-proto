import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { deepclone } from "../src/services/util";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const newFormData = deepclone(formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <section id="login">
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <div className="logo">
            <img src="images/logo.svg" alt="shall unite logo" />
          </div>
          <input
            type="text"
            placeholder="username"
            name="username"
            autoComplete={false}
            value={formData.username}
            onChange={handleInput}
          />
          <button>Let's Go</button>
        </form>
        <img
          class="login-main-img"
          src="images/home-graphic.jpg"
          alt="vector of people"
        />
      </div>
      <style jsx>
        {`
          #login {
            display: flex;
            justify-content: center;
          }

          .login-container {
            max-width: 1100px;
            min-width: 90vw;
            display: flex;
          }

          form {
            padding-top: 25vh;
            min-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .logo {
            margin-bottom: 50px;
          }

          input,
          ::placeholder {
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            color: #bcb8b8;
          }
          input {
            color: #303030;
            width: 341px;
            height: 50px;

            background: #fcfbfe;
            border: 1px solid #e5e6ef;
            border-radius: 100px;
            outline: none;

            margin-bottom: 30px;
            padding-left: 30px;
          }

          button {
            width: 370px;
            height: 60px;
            border: none;
            background: #216efb;
            border-radius: 100px;
            font-weight: bold;
            font-size: 21px;
            line-height: 31px;
            color: #ffffff;
            cursor: pointer;
            transition: 0.2s;
            margin-bottom: 8px;
            outline: none;
          }
          button:hover {
            box-shadow: 0px 2px 8px rgba(33, 110, 251, 0.536331);
          }

          .login-main-img {
            object-fit: cover;
            height: 100%;
          }
        `}
      </style>
    </section>
  );
};

export default Login;
