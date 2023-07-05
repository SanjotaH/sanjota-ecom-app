import React from "react";
import styled from "styled-components";
const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>This page doest Exist</h1>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0;
  margin-top: 120px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export default ErrorPage;
