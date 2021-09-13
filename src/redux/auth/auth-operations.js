import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

console.log(axios.defaults.baseURL);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
