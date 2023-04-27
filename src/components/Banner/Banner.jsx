"use client"
import React from "react";
import styled from "styled-components";

import Iconos from "./Iconos";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 300px;
  background-color: #b6decb;
`;
const BoxIconos = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
`;
const BoxBanner = styled.div`
  width: 100%;
  min-width: 300px;
  height: 200px;
  overflow: hidden;
  margin: auto;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const History = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  width: 50%;
  font-family: system-ui;
  color: #ffffff;
  font-size: 13.5px;
  top: 0;
  height: 100%;
  padding: 0 5px;
  background: rgba(0, 0, 0, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
`;

const Banner = () => {
  return (
    <>
      <Box>
        <BoxIconos>
          <Iconos src="/iconRetirar.svg" Texto="Retirar en tienda" />
          <Iconos src="/iconUbicacion.svg" Texto="En la punta del cerro" />
          <Iconos src="/iconDelevery.svg" Texto="Delevery" />
        </BoxIconos>

        <BoxBanner>
          <img src="/imgBanner.avif" alt="" />
          <History>
            Little Lemon es un restaurante de cocina peruana con precios
            moderados y ambiente relajado. El menú rotativo de 12 a 15 platos
            incluye platos clásicos y regionales
          </History>
        </BoxBanner>
      </Box>
    </>
  );
};

export default Banner;
