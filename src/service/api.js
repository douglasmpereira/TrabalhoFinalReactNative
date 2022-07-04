import axios from "axios";

const api = axios.create({
  baseURL: "https://62b3247d4f851f87f455416d.mockapi.io/api/",
});

export default api;