import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.ENDPOINT || "http://127.0.0.1:4001";

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      const socket = socketIOClient(ENDPOINT);
      socket.emit("INTRODUCE", "matt");
      socket.on("FromAPI", (data) => {
        setResponse(data);
      });
    })();
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
};

export default App;