import http from "http";
import app from "./app.js";

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer(app);
server.listen(PORT, HOST, () =>
  console.log(`Server running at ${HOST}:${PORT}`)
);
