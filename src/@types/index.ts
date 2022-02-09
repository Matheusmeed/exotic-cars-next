export interface IColors {
  color: string;
  image: string;
  id: string;
}

export interface Data {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  logo: string;
  colors: IColors[];
}

export interface CarsType {
  data: Data[];
}

export type CarCardProps = {
  onClick: Function;
  brand: string;
  name: string;
  image: string;
  price: number;
  id: number;
  last: boolean;
};
