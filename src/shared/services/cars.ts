import api from "./api";

export async function getCars() {
  const response = await api
    .get("/cars")
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
}
