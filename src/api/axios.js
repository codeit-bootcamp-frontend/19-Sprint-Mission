import axios from "axios";

const api = axios.create({
  base_URL: `https://panda-market-api.vercel.app/docs/#/`,
});

export default api;
