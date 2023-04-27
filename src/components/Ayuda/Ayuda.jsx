"use client";
import React from "react";
import styled from "styled-components";
import DetailsSummary from "./DetailsSummary";

const Box = styled.div`
  background-color: #b6decb;
  padding: 25px 0;
  min-height: calc(100vh - 58px);
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  font-size: 24px;
  margin: auto;
`;

const Ayuda = () => {
  return (
    <Box>
      <Title>Preguntas frecuentes</Title>

      <DetailsSummary
        pregunta="¿Tienen algún programa de lealtad o recompensas para los clientes?"
        respuesta="No, no existe ningún programa de lealtad. Sin embargo, si un cliente
        agrega un producto a sus favoritos, existe la posibilidad de que se le
        ofrezca un descuento."
      />

      <DetailsSummary
        pregunta="¿Tienen algún programa de lealtad o recompensas para los clientes?"
        respuesta="Lunes a jueves: de 9:00 am a 10:00 pm"
      />

      <DetailsSummary
        pregunta="¿Ofrecen servicios de entrega o para llevar?"
        respuesta="Sí, el restaurante ofrece servicios de entrega y también se pueden
        retirar los pedidos en el local."
      />

      <DetailsSummary
        pregunta="¿Cuáles son los métodos de pago que aceptan en el restaurante?"
        respuesta="El restaurante acepta pagos con tarjeta de débito y efectivo. Al pedir
        delivery, también se puede pagar en efectivo al concretar la entrega."
      />

      <DetailsSummary
        pregunta="¿Tienen algún evento especial programado en el futuro cercano?"
        respuesta="Sí, al inicio de cada temporada, durante las primeras dos semanas, el
        restaurante ofrece sorpresas en el local, incluyendo descuentos."
      />
    </Box>
  );
};

export default Ayuda;
