import axios from "axios";
import API_BASE_URL from "./base"; // base.jsx joylashgan joyga qarab path sozlang

const instance = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export default instance;
