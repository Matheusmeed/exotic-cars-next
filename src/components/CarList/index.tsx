import { Container, ScrollButton } from "./styles";
import { CarCard } from "components/index";
import { useRouter } from "next/router";
import { CarsType } from "@types";
import { group } from "assets";
import Image from "next/image";

type Props = {
  cars: CarsType;
};

function CarList({ cars }: Props) {
  const router = useRouter();

  return (
    <Container>
      {cars.data.map((car) => {
        return (
          <CarCard
            key={car.id}
            onClick={() => {
              router.push(`/selected/${car.id}/01`);
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
