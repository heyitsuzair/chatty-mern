import { io } from "socket.io-client";
const url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
export const socket = io(url);
