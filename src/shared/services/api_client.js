import axios from "axios";
const API_CLIENT = {
  get(URL) {
    axios.get(URL, { timeout: 7000 });
  },
  post(URL, data) {},
  put() {},
  delete() {},
};

export default API_CLIENT;
