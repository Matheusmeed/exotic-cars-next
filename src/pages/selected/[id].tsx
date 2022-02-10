/* eslint-disable @next/next/no-img-element */
import "shared/styles/SelectedCarPage";
import {
  BackButton,
  BookButton,
  CarColorDiv,
  CarDiv,
  CarHeader,
  CarImgDiv,
  Container,
  InfoDiv,
  Price,
} from "shared/styles/SelectedCarPage";
import { ColorCarList, Header } from "components";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { getCars } from "shared/services/cars";
import { CarsType, Data } from "@types";
import { GetStaticProps } from "next";
import { api } from "shared";
import axios from "axios";

function SelectedCar({ car }: { car: Data }) {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <CarHeader>
          <img src={car.logo} alt="logo" />
          <InfoDiv>
            <h1 style={{ margin: 0 }}>{`${car.brand} ${car.name}`}</h1>
            <Price>${car.price}/day</Price>
          </InfoDiv>
        </CarHeader>
        <CarDiv>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <BackButton
              onClick={() => {
                router.push("/");
              }}
            >
              <BsArrowLeft
                style={{ marginRight: 9, fontSize: 20, color: "#313136" }}
              />
              Back to catalog
            </BackButton>
          </div>
          <CarImgDiv>
            <img
              src={car.colors[Math.round(car.colors.length / 2 - 1)].image}
              alt="carro"
            />
            <div>
              <BookButton>
                Book now
                <BsArrowRight
                  style={{ marginLeft: 9, fontSize: 20, color: "white" }}
                />
              </BookButton>
            </div>
          </CarImgDiv>
          <CarColorDiv>
            <div>
              <h1>{car.colors[Math.round(car.colors.length / 2 - 1)].id}</h1>
              <h3>{car.colors[Math.round(car.colors.length / 2 - 1)].color}</h3>
            </div>
          </CarColorDiv>
        </CarDiv>
        {/* <ColorCarList /> */}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  let paths: any = [];
  const cars = await getCars();
  cars.map((car: Data) => {
    return paths.push({ params: car.id.toString() });
  });

  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await getCars();
  const car = await data[Number(id) - 1];
  console.log(car);
  return {
    props: { car: car },
  };
};

export default SelectedCar;
