import type { GetStaticProps } from "next";
import { Container } from "shared/styles/MainPage";
import { CarList, Header } from "components";
import { getCars } from "shared/services/cars";
import { CarsType } from "@types";

type Props = {
  cars: CarsType;
};

const Home = ({ cars }: Props) => {
  return (
    <>
      <Header />
      <Container>
        <CarList cars={cars} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cars = await getCars();

  return {
    props: { cars },
    revalidate: 43200000,
  };
};

export default Home;
