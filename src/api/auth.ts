import axios from "axios";

const BASE_URL = "https://biroperjalanan.datacakra.com/api";

export function Login(username: string, password: string) {
  return axios.post(`${BASE_URL}/login`, { username, password });
}
