import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function Login(email: string, password: string) {
  return await axios.post(BASE_URL + "/authaccount/login", {
    email,
    password,
  });
}

export async function Register(name: string, email: string, password: string) {
  return await axios.post(BASE_URL + "/authaccount/registration", {
    name,
    email,
    password,
  });
}
