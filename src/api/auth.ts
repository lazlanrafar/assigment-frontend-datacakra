import axios from "axios";

export async function Login(email: string, password: string) {
  return await axios.post("/api/authaccount/login", {
    email,
    password,
  });
}
