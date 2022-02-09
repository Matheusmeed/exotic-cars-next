import { useRouter } from "next/router";

const SelectedCar = () => {
  const router = useRouter();

  return <div>Carro selecionado: {router.query.id}</div>;
};

export default SelectedCar;
