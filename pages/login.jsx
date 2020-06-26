import React, { useState } from "react";
import { useRouter } from "next/router";

import { deepclone } from "../src/services/util";
import { loginAPI } from "../src/services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await loginAPI(formData);
    console.log(response);
    if (!response.error) {
      router.push(`/chat?username=${response.username}`);
    }
    setLoading(false);
  };

  const handleInput = (e) => {
    const newFormData = deepclone(formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  return (
    <section id="login">
      <div className="login-container">
        <form>
          <div className="logo">
            <img src="images/logo.svg" alt="shall unite logo" />
          </div>
          <input
            type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
            value={formData.username}
            onChange={handleInput}
            disabled={loading}
          />
          <button type="submit" onClick={handleLogin}>
            Let's Go
          </button>
        </form>
        <img
          className="login-main-img"
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
