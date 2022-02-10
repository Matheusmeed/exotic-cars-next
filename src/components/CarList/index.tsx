import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CarsType } from "@types";
import { setSelectedCar } from "store/Stock.store";
import { CarCard } from "components/index";
import { group } from "assets";
import { Container, ScrollButton } from "./styles";
import { useRouter } from "next/router";
import Image from "next/image";
import { getCars } from "shared/services/cars";
import { api } from "shared";

function CarList() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cars, setCars] = useState<CarsType>();

  useEffect(() => {
    api.get("/cars").then((res) => setCars(res.data));
  }, []);

  return (
    <Container>
      {cars?.data.map((car) => {
        return (
          <CarCard
            key={car.id}
            onClick={() => {
              dispatch(
                setSelectedCar({
                  brand: car.brand,
                  name: car.name,
                  price: car.price,
                  image: car.image,
                  id: car.id,
                  logo: car.logo,
                  colors: car.colors,
                })
              );
              router.push(`/selected/${car.id}`);
            }}
            brand={car.brand}
            name={car.name}
            price={car.price}
            image={car.image}
            id={car.id}
            last={car.id === cars.data.length}
          />
        );
      })}
      <ScrollButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Image src={group} alt="scroll up" width={100} />
      </ScrollButton>
    </Container>
  );
}

export default CarList;
