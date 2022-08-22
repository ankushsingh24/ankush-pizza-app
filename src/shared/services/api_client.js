import axios from "axios";
const API_CLIENT = {
  get(URL) {
    const promise = axios.get(URL, { timeout: 7000 });
    return promise;
  },
  post(URL, data) {},
  put() {},
  delete() {},
};

export default API_CLIENT;
