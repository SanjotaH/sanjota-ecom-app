import React from "react";
import styled from "styled-components";
import ProductReducer from "./reducer/productReducer";
import Products from "./Products";

const Home = () => {
  return (
    <Wrapper>
      <Products />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default Home;
