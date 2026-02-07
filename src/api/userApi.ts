import axios from "axios";
import type { User } from "../types/user";

const API_URL = "/api/users"; 

export const createUser = (data: User) => axios.post(API_URL, data);

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};


export const updateUser = (id: string, data: User) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteUser = (id: string) => axios.delete(`${API_URL}/${id}`);
