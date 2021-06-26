import axios from "axios";
import { getToken } from "../utils/AuthUtil";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export default client;
client.interceptors.request.use((config) => {
  config.headers.post["x-auth-token"] = getToken();
  config.headers.delete["x-auth-token"] = getToken();
  return config;
});
