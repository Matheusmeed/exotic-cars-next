import { CarsType, Data } from "@types";
import api from "./api";

export async function getCars() {
  const response = await api.get("/cars");
  const data: CarsType = response.data;

  return data;
}
