import axios from "axios";
const API_CLIENT = {
  get(URL) {
    const promise = axios.get(URL, { timeout: 7000 });
    return promise;
  },

  post(URL, data) {
    const promise = axios.post(URL, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return promise;
  },

  put() {},

  delete() {},
};

export default API_CLIENT;
