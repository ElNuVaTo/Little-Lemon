"use client";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 5px 0;
  p {
    font-family: system-ui;
    font-size: 12px;
    cursor: pointer;
    color: #000000;
  }
`;
const BoxImg = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  img {
    object-fit: cover;
    width: 30px;
    height: 30px;
  }
`;

const Iconos = ({ src, Texto }) => {
  return (
    <>
      <Box>
        <BoxImg>
          <img src={src} alt="" width={10} />
        </BoxImg>
        <p>{Texto}</p>
      </Box>
    </>
  );
};

export default Iconos;