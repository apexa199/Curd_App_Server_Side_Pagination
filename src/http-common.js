import axios from "axios";

export default axios.create({
  baseURL: "https://itchy-plum-caridea.cyclic.app/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});