import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;

  display: grid;
  place-items: center;
`;

function Loading() {
  return (
    <StyledLoading>
      <h1>Loading...</h1>
    </StyledLoading>
  );
}

export default Loading;
