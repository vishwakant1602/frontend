import axios from "axios";
import { User } from "./types";

export async function fetchUser(code: string): Promise<User> {
  try {
    const response = await axios.get(`http://127.0.0.1:3001/user/@me?code=${code}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
