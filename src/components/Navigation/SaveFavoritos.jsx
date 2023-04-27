import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;
const BoxImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const Precio = styled.p`
  font-family: monospace;
  font-size: 19.5px;
`;
const BoxPrecioCarrito = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px 0;
`;

const BoxNombre = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  gap: 5px 0;
  h3 {
    font-size: 16px;
    font-family: monospace;
    white-space: nowrap;
  }
`;

const SaveFavoritos = ({ src, precio, name }) => {

  return (
    <>
      <Box>
        <BoxImg>
          <Img src={src} alt="" />
        </BoxImg>

        <BoxNombre>
          <h3>{name}</h3>

        </BoxNombre>

        <BoxPrecioCarrito>
          <Precio>{precio}</Precio>

          <button>Comprar</button>
        </BoxPrecioCarrito>
      </Box>
    </>
  );
};

export default SaveFavoritos;
