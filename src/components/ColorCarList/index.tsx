/* eslint-disable @next/next/no-img-element */
import { ArrowButton, Container, MainSquare, Square } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { setCarColor } from "store/Stock.store";
import { Data } from "@types";
import { useRouter } from "next/router";

type Props = {
  car: Data;
  color: string;
};

function ColorCarList(props: Props) {
  const router = useRouter();

  function renderSquare() {
    return props.car.colors.map((el) => {
      if (
        props.car.colors.indexOf(el) ===
        Math.round(props.car.colors.length / 2 - 1)
      ) {
        return (
          <div key={el.id}>
            <MainSquare>
              <img className="img" src={el.image} alt="car" />
            </MainSquare>
          </div>
        );
      } else {
        return (
          <div key={el.id}>
            <Square
              onClick={() => router.push(`/selected/${props.car.id}/${el.id}`)}
            >
              <img src={el.image} alt="car" />
            </Square>
          </div>
        );
      }
    });
  }

  return (
    <Container>
      <div>
        <ArrowButton
          onClick={() => {
            router.push(`/selected/${props.car.id}/${props.car.colors[0].id}`);
          }}
        >
          <BsArrowLeft style={{ fontSize: 20, color: "white" }} />
        </ArrowButton>
      </div>
      {renderSquare()}

      <div>
        <ArrowButton
          onClick={() => {
            router.push(`/selected/${props.car.id}/${props.car.colors[2].id}`);
          }}
        >
          <BsArrowRight style={{ fontSize: 20, color: "white" }} />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default ColorCarList;
