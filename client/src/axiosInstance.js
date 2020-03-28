import axios from "axios";

const instance = axios.create({
  baseURL: "http://ci-node-server/",
  timeout: 5000
});

export { instance as axios };
