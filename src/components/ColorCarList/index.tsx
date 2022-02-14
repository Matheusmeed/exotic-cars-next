/* eslint-disable @next/next/no-img-element */
import { ArrowButton, Container, MainSquare, Square } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Data, IColors } from "@types";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  car: Data;
  color: string;
};

function ColorCarList(props: Props) {
  const router = useRouter();
  const [ColorsArr, setColorsArr] = useState<IColors[]>([]);

  function renderSquare() {
    let newArr: IColors[] = [];

    if (ColorsArr.length) {
      newArr = ColorsArr;
    } else {
      props.car.colors.forEach((color) => {
        newArr.push(color);
      });
    }

    newArr.forEach((color: IColors) => {
      const initialColor = { color: "", id: "", image: "" };
      if (color.id === props.color) {
        let first: IColors = initialColor;
        let middle: IColors = initialColor;
        let last: IColors = initialColor;

        switch (color.id) {
          case "01":
            middle = color;
            newArr.forEach((el) => {
              if (el.id === "02") {
                last = el;
              } else if (el.id === "03") {
                first = el;
              }
            });
            break;
          case "02":
            middle = color;
            newArr.forEach((el) => {
              if (el.id === "01") {
                first = el;
              } else if (el.id === "03") {
                last = el;
              }
            });
            break;
          case "03":
            middle = color;
            newArr.forEach((el) => {
              if (el.id === "02") {
                first = el;
              } else if (el.id === "01") {
                last = el;
              }
            });
            break;

          default:
            break;
        }

        newArr[0] = first;
        newArr[1] = middle;
        newArr[2] = last;
      }
    });
    console.log(newArr);
    return (
      <>
        <div key={newArr[0].id}>
          <Square
            onClick={() =>
              router.push(`/selected/${props.car.id}/${newArr[0].id}`)
            }
          >
            <img src={newArr[0].image} alt="car" />
          </Square>
        </div>
        <div key={newArr[1].id}>
          <MainSquare>
            <img className="img" src={newArr[1].image} alt="car" />
          </MainSquare>
        </div>
        <div key={newArr[2].id}>
          <Square
            onClick={() =>
              router.push(`/selected/${props.car.id}/${newArr[2].id}`)
            }
          >
            <img src={newArr[2].image} alt="car" />
          </Square>
        </div>
      </>
    );
  }

  return (
    <Container>
      <div>
        <ArrowButton
          onClick={() => {
            router.push(
              `/selected/${props.car.id}/${
                props.car.colors[Number(router.query.color) - 1].id
              }`
            );
          }}
        >
          <BsArrowLeft style={{ fontSize: 20, color: "white" }} />
        </ArrowButton>
      </div>
      {renderSquare()}

      <div>
        <ArrowButton
          onClick={() => {
            router.push(
              `/selected/${props.car.id}/${
                router.query.color === "03"
                  ? props.car.colors[1].id
                  : router.query.color === "02"
                  ? "03"
                  : props.car.colors[Number(router.query.color) + 1].id
              }`
            );
          }}
        >
          <BsArrowRight style={{ fontSize: 20, color: "white" }} />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default ColorCarList;
