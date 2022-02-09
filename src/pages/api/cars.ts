import { CarsType } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarsType>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        brand: "Ferrari",
        name: "CALIFORNIA",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/california.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoFerrari.png?raw=true",
        colors: [
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/californiablue.png?raw=true",
            id: "03",
          },
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/californiared.png?raw=true",
            id: "01",
          },
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/californiawhite.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 2,
        brand: "Porsche",
        name: "911 TURBO S",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/turbos.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoPorsche.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turboswhite.png?raw=true",
            id: "03",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosgold.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 3,
        brand: "Porsche",
        name: "911 TURBO S",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/turbo.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoPorsche.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turboswhite.png?raw=true",
            id: "03",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosgold.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 4,
        brand: "Porsche",
        name: "911 TURBO S",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/turbog.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoPorsche.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turboswhite.png?raw=true",
            id: "03",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosgold.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 5,
        brand: "Porsche",
        name: "911 GT3 RS",
        price: 825,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/gt3.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoPorsche.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turboswhite.png?raw=true",
            id: "03",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosgold.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 6,
        brand: "Bentley",
        name: "CONTINENTAL GT",
        price: 825,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/continental.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Bentley-logo.png?raw=true",
        colors: [
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bentleyblue.png?raw=true",
            id: "03",
          },
          {
            color: "Gray",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bentleygray.png?raw=true",
            id: "01",
          },
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bentleywhite.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 7,
        brand: "BMW",
        name: "M1 COMPETITION",
        price: 825,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/m1.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/bmw-logo.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bmwWhite.png?raw=true",
            id: "03",
          },
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bmwblue.png?raw=true",
            id: "01",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bmwgold.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 8,
        brand: "Alfa Romeo",
        name: "4C SPIDER",
        price: 825,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/spider.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Alfa_Romeo-logo.png?raw=true",
        colors: [
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/4cred.png?raw=true",
            id: "03",
          },
          {
            color: "Yellow",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/4cYellow.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/4cBlack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 9,
        brand: "Mclaren",
        name: "P1 GTR",
        price: 925,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/p1.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Mclaren_PNG49.png?raw=true",
        colors: [
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/mcblack.png?raw=true",
            id: "03",
          },
          {
            color: "Orange",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/mcorange.png?raw=true",
            id: "01",
          },
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/mcred.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 10,
        brand: "Lamborghini",
        name: "AVENTADOR",
        price: 925,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/aventador.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/lamborghini_PNG10709.png?raw=true",
        colors: [
          {
            color: "Orange",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/lamorange.png?raw=true",
            id: "03",
          },
          {
            color: "Gray",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/lamgray.png?raw=true",
            id: "01",
          },
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/lamblue.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 11,
        brand: "Bugatti",
        name: "VEYRON SPYDER",
        price: 925,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/veyron.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/1280px-Bugatti_logo.svg.png?raw=true",
        colors: [
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bugblue.png?raw=true",
            id: "03",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bugblack.png?raw=true",
            id: "01",
          },
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/bugwhite.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 12,
        brand: "Chevrolet",
        name: "CORVETTE",
        price: 925,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/corvette.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Chevrolet-Logo.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/corwhite.png?raw=true",
            id: "03",
          },
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/corred.png?raw=true",
            id: "01",
          },
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/corblue.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 13,
        brand: "Ferrari",
        name: "CALIFORNIA",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/california2.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoFerrari.png?raw=trueg",
        colors: [
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/california2red.png?raw=true",
            id: "03",
          },
          {
            color: "Yellow",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/california2yellow.png?raw=true",
            id: "01",
          },
          {
            color: "Gray",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/california2gray.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 14,
        brand: "Rolls-Royce",
        name: "WRAITH",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/wraith.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Rolls-royce-logo.png?raw=true",
        colors: [
          {
            color: "Green",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/wraithgreen.png?raw=true",
            id: "03",
          },
          {
            color: "Blue",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/wraithblue.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/wraithblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 15,
        brand: "Porsche",
        name: "911 TURBO S",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/turbow.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/logoPorsche.png?raw=true",
        colors: [
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turboswhite.png?raw=true",
            id: "03",
          },
          {
            color: "Gold",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosgold.png?raw=true",
            id: "01",
          },
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/turbosblack.png?raw=true",
            id: "02",
          },
        ],
      },
      {
        id: 16,
        brand: "Mercedes-benz",
        name: "AMG GTS",
        price: 725,
        image:
          "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/cars/amg.png?raw=true",
        logo: "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/logos/Mercedes-Logo.png?raw=true",
        colors: [
          {
            color: "Black",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/merblack.png?raw=true",
            id: "03",
          },
          {
            color: "Red",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/merred.png?raw=true",
            id: "01",
          },
          {
            color: "White",
            image:
              "https://github.com/Matheusmeed/exotic-cars/blob/master/src/assets/carColors/merwhite.png?raw=true",
            id: "02",
          },
        ],
      },
    ],
  });
}
