import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.ENDPOINT || "http://127.0.0.1:4001";

import { Navbar } from "../src/components";

const Chat = () => {
  const [username, setUsername] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const queryName = router.query.username;
    if (!queryName) router.push("/login");
    setUsername(queryName);
    let socket;
    if (username) {
      socket = socketIOClient(ENDPOINT);
      socket.emit("INTRODUCE", username);
    }

    return () => {
      if (socket) socket.disconnect();
    };
  }, [username]);

  return username ? (
    <>
      <Navbar username={username} />
    </>
  ) : (
    <>"loading.."</>
  );
};

export default Chat;
