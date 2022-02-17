import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjAzOTA5ODY3YzlmYjM2OGVjOTZiNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzEzMzM4OSwiZXhwIjoxNjQzMzkyNTg5fQ.1BjzoY1ZvA-eQo8snIX-juyZTPulWx2Q2ypBkGK45Ws"


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});