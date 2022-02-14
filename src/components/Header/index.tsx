import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { locationIcon, calendarIcon, searchIcon } from "assets";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Button,
  ButtonTitle,
  HeaderDiv,
  Icon,
  SearchButton,
  SearchDiv,
  Sign,
  SignDiv,
  Title,
  Title2,
} from "./styles";

function Header() {
  const router = useRouter();

  return (
    <>
      <HeaderDiv>
        <ButtonTitle
          onClick={() => {
            router.push("/");
          }}
        >
          <Title>EXOTIC</Title> <Title2>CARS</Title2>
        </ButtonTitle>

        <SearchDiv>
          <Button>
            <Icon>
              <Image src={locationIcon} alt="location" />{" "}
            </Icon>
            North Carolina, NC 90025
          </Button>
          <div>
            <Button style={{ marginRight: 5 }}>
              <Icon>
                <Image src={calendarIcon} alt="calendar" />
              </Icon>
              11/03/2021
            </Button>
            <Button>
              <Icon>
                <Image src={calendarIcon} alt="calendar" />
              </Icon>
              12/12/2021
            </Button>
          </div>
          <SearchButton>
            <Image src={searchIcon} alt="search" />
          </SearchButton>
        </SearchDiv>

        <SignDiv>
          <Sign>Sign up</Sign>
          <Sign border={true}>Sign in</Sign>
        </SignDiv>

        <DropdownButton align="end" title="" id="dropdown-menu-align-end">
          <Dropdown.Item eventKey="1">Sign up</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sign in</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">
            Search <BsSearch size={13} color="#7B89F4" />
          </Dropdown.Item>
        </DropdownButton>
      </HeaderDiv>
    </>
  );
}

export default Header;
