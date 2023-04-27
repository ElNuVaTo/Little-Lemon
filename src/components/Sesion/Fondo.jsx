import React from "react";
import styled from "styled-components";

const BoxImgTop = styled.div`
  position: absolute;
  width: 600px;
  height: 500px;
  top: -230px;
  left: -350px;
`;
const BoxImgBottom = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: -200px;
  right: -230px;
`;
const ImagenTop = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const ImagenBottom = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Fondo = () => {
  return (
    <>
        <BoxImgTop>
          <ImagenTop src='/fondoSesionCircle1.svg' alt="" />
        </BoxImgTop>

        <BoxImgBottom>
          <ImagenBottom src='/fondoSesionCircle2.svg' alt="" />
        </BoxImgBottom>
    </>
  );
};

export default Fondo;
