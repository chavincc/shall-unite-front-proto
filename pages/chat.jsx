import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Navbar } from "../src/components";

const Chat = () => {
  const [username, setUsername] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setUsername(router.query.username);
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Chat;
