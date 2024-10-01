import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = "http://localhost:8000";
const URL = "https://my-squad-two.vercel.app"; // Your API base URL

export const socket = io(URL, {
  autoConnect: false, // Prevents the connection from opening immediately
});
