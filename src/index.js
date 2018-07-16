import React from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal, keyframes } from "styled-components";

injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(32px);
  }

  100% {
    transform: translateY(0);
  }
`;

const FlexLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  animation: ${float} 1s ease-in-out infinite;
`;

const App = () => (
  <FlexLayout>
    {[...new Array(5)].map((_, i) => <Title>{`Hello world - ${i}`}</Title>)}
  </FlexLayout>
);

ReactDOM.render(<App />, document.querySelector("#root"));
