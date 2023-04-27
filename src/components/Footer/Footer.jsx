"use client";
import React from "react";
import styled from "styled-components";

const Box = styled.footer`
  padding: 20px 10px;
  background-color: #4c5d55;
  height: max-content;
`;

const Contacto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  border-radius: 3px;
  padding: 8px;
  background-color: #b6decb;
  margin: auto;
`;

const Copy = styled.div`
  display: flex;
  max-width: 300px;
  border-radius: 3px;
  padding: 8px;
  background-color: #b6decb;
  margin: 10px auto;
  p {
    text-align: center;
  }
`;

const RedesSociales = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  border-radius: 3px;
  padding: 8px;
  margin: auto;
  background-color: #b6decb;
  a {
    color: black;
  }
`;

const Footer = () => {
  return (
    <Box>
      <Contacto>
        <p>Teléfono: (123) 456-7890</p>
        <p>Correo: info@littlelemon.com</p>
      </Contacto>
      <Copy>
        <p>&copy; 2023 Little Lemon. Todos los derechos reservados.</p>
      </Copy>
      <RedesSociales>
        <a href="#">Facebook</a>

        <a href="#">Twitter</a>

        <a href="#">Instagram</a>
      </RedesSociales>
    </Box>
  );
};

export default Footer;
