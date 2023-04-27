import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 95%;
  margin: 15px auto;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
  background-color: white;

`;

const Preguntas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;

  h4{
    font-size: 17.5px;
    font-weight: 500;
  }
`;

const Respuestas = styled.p`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.10s ease;
  color: #808080;
  
`;

const DetailsSummary = ({ pregunta, respuesta }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box>
        <Preguntas onClick={toggleAccordion}>
          <h4>{pregunta}</h4>
          <span>{isOpen ? "-" : "+"}</span>
        </Preguntas>
        <Respuestas isOpen={isOpen}>{respuesta}</Respuestas>
      </Box>
    </>
  );
};

export default DetailsSummary;
