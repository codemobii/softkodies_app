// A class to handle requests

import axios from "axios";
import { apiUrl, getError } from "./helpers";
import { Toast } from "./toast";

export default class Request {
  constructor(token) {
    this.token = token;
  }

  async post(url, data, message) {
    try {
      const res = await axios.post(`${apiUrl + url}`, data, {
        headers: this.token && {
          Authorization: `Bearer ${this.token}`,
        },
      });

      console.log("done", res?.data);

      if (!res?.data?.error) {
        message && new Toast().success(message);
        return { data: res.data, error: false };
      } else {
        new Toast().error(res?.data?.message);
        return { message: res?.data?.message, error: true };
      }
    } catch (er) {
      console.log(`error at ${url}`, er?.response?.data);

      const msg = getError(er);

      new Toast().error(msg);
      return { message: msg, error: true };
    }
  }

  async get(url) {
    try {
      const res = await axios.get(`${apiUrl + url}`, {
        headers: this.token && {
          Authorization: `Token ${this.token}`,
        },
      });
      console.log("DONE", res.data?.status);

      return { data: res.data, error: false };
    } catch (er) {
      const msg = getError(er);

      console.log("ERROR", msg);

      return { error: true, message: msg };
    }
  }
}
