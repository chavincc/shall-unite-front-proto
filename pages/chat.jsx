import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.ENDPOINT || "http://127.0.0.1:4001";

import { Navbar } from "../src/components";
import { getUsers } from "../src/services/api";

const Chat = () => {
  const [username, setUsername] = useState(null);
  const [users, setUsers] = useState([]);

  const router = useRouter();

  const updateUser = async () => {
    const response = await getUsers();
    if (!response.error) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    const queryName = router.query.username;
    if (!queryName) router.push("/login");
    setUsername(queryName);
    let socket;
    if (username) {
      socket = socketIOClient(ENDPOINT);
      socket.emit("INTRODUCE", username);

      socket.on("QUERY_READY", () => {
        updateUser();
      });
    }

    return () => {
      if (socket) socket.disconnect();
    };
  }, [username]);

  return username ? (
    <>
      <Navbar username={username} />
      {users.map((user) => user.isOnline && <p>{user.username}</p>)}
    </>
  ) : (
    <>"loading.."</>
  );
};

export default Chat;
