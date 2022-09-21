import axios, { AxiosRequestConfig } from "axios";
import nProgress from "./mynprogress";
import { Http } from "./types";

axios.defaults.baseURL = "";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      nProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          nProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          nProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      nProgress.start();
      axios
        .post(url, { params })
        .then((res) => {
          nProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          nProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      nProgress.start();
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          nProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          nProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};

export default http;
