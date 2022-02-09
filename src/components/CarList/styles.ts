import styled from "styled-components";

export const Container = styled.ul`
  max-width: 90%;
  overflow-x: hidden;
  display: flex;
  margin-top: 13vh;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const ScrollButton = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
  overflow: hidden;
  width: 80px;
  height: 80px;
`;
