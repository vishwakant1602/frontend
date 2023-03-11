import axios from "axios";
import { Guild, User } from "./types";

export async function fetchUserFromAPI(code: string): Promise<User> {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/@me?code=${code}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchGuildFromAPI(guildId: string, useCache: boolean = true): Promise<Guild> {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/guild?id=${guildId}&useCache=${useCache}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
