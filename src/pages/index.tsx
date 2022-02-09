import type { NextPage } from "next";
import { Container } from "shared/styles/MainPage";
import { CarList, Header } from "components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <CarList />
      </Container>
    </>
  );
};

export default Home;
