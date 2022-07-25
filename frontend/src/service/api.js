import axios from "axios";
import store from "../store/store";

const API = axios.create({
  baseURL: process.env.REACT_APP_MARKET_API_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer`
  }
})

API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status !== 401) {
      throw error;
    }
    if (typeof error.response.data.message !== "undefined") {
      if (error.response.data.message.includes("expired")) {
        //store.dispatch(logout());
        throw error;
      }
    }
  }
)

export default API;