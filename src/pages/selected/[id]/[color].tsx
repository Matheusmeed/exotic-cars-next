/* eslint-disable @next/next/no-img-element */
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
import { Data } from "@types";

type Props = {
  car: Data;
  color: string;
};

function SelectedCar({ car, color }: Props) {
  const router = useRouter();

  function renderImg() {
    let imgUrl;

    car.colors.forEach((el) => {
      if (el.id === color) {
        imgUrl = el.image;
      }
    });
    return imgUrl;
  }

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
            <img src={renderImg()} alt="carro" />
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
              <h1>
                {color === "03"
                  ? car.colors[0].id
                  : car.colors[Number(color)].id}
              </h1>
              <h3>
                {color === "03"
                  ? car.colors[0].color
                  : car.colors[Number(color)].color}
              </h3>
            </div>
          </CarColorDiv>
        </CarDiv>
        <ColorCarList car={car} color={color} />
      </Container>
    </>
  );
}

export const getStaticProps = async (context: {
  params: { id: string; color: string };
}) => {
  const id = Number(context.params.id);
  const color = context.params.color;
  const cars = await getCars();
  const car = cars.data[id - 1];

  return {
    props: { car, color },
    revalidate: 100000,
  };
};

export async function getStaticPaths() {
  let paths: { params: { id: string; color: string } }[] = [];
  const cars = await getCars();
  const data = cars.data;

  data.forEach((car) => {
    car.colors.map((color) => {
      paths.push({ params: { id: car.id.toString(), color: color.id } });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default SelectedCar;
