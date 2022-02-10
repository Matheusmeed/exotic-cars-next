/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getCars();
  console.log(data);
  return {
    props: {
      cars: data,
    },
  };
};

function CarList(props: { cars: CarsType }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Container>
      {props.cars?.data.map((car) => {
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
              router.push(
                `/selected/${car.brand.split(" ").join("_")}-${car.name
                  .split(" ")
                  .join("_")}`
              );
            }}
            brand={car.brand}
            name={car.name}
            price={car.price}
            image={car.image}
            id={car.id}
            last={car.id === props.cars.data.length}
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
