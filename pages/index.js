import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import socketIOClient from "socket.io-client";
// const ENDPOINT = process.env.ENDPOINT || "http://127.0.0.1:4001";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);
  return <>loading..</>;

  // const [response, setResponse] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const socket = socketIOClient(ENDPOINT);
  //     socket.emit("INTRODUCE", "matt");
  //   })();
  // }, []);
  // return (
  //   <p>
  //     It's <time dateTime={response}>{response}</time>
  //   </p>
  // );
};

export default Home;
