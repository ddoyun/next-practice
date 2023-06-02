import type { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  color: pink;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title>Hello world</Title>
    </div>
  );
};

export default Home;
