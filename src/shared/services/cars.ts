import api from "./api";

export async function getCars() {
  const response = await api.get("/cars");
  const data = response.data;

  return data;
}
