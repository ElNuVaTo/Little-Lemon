import React from "react";
import styled from "styled-components";

const BoxImg = styled.div`
  margin-bottom: 10px;
  img {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-family: system-ui;
    width: 80%;
    display: block;
    padding: 5px 10px;
    margin: auto;
    border-radius: 5px;
    &:hover {
      background-color: #b6decb;
      color: #4c5d55;
    }
  }
`;

const Deseados = () => {
  return (
    <>
      <BoxImg>
        <img src="" />
      </BoxImg>
    </>
  );
};

export default Deseados;
