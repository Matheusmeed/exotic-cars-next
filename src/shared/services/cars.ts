import api from "./api";

export async function getCars(setCars: Function) {
  const response = await api
    .get("/cars")
    .then((res) => res.data)
    .catch(() => false);

  setCars(response);
}
