import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const get = async (url, params) => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

const post = async (url, data) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};

const patch = async (url, data) => {
  const response = await axiosInstance.patch(url, data);
  return response.data;
};

const del = async (url) => {
  const response = await axiosInstance.delete(url);
  return response.data;
};

export { get, post, patch, del };
