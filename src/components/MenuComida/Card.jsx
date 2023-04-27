import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 250px;
  padding: 5px;
  gap: 5px 0;
  position: relative;
  box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.503);
  background-color: white;
`;
const NombreComida = styled.h2`
  font-family: system-ui;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: max-content;
  width: 100%;
  font-size: 20px;
`;

const BoxImg = styled.div`
  display: flex;
  width: 100%;
  height: 135px;
  border-radius: 5px;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const BoxTexto = styled.div``;
const Precio = styled.p`
  font-family: monospace;
  font-size: 19.5px;
`;
const Descripcion = styled.p`
  color: #808080;
  font-family: system-ui;
  font-size: 14.5px;
`;
const Opciones = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  left: 0;
  margin: auto;
  background-color: rgb(250, 250, 108);
`;

const BoxComprar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  margin: auto;
`;
const Button = styled.button`
  font-family: system-ui;
  font-size: 16px;
  &[data-active="true"] {
    outline-offset: 2px;
  }
`;

const BoxFavoritos = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 50px;
`;
const Favoritos = styled(motion.img)`
  object-fit: contain;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
const variants = {
  Activo: { height: 150 },
  Inactivo: { height: 40 },
};

const Card = ({ src, alt, NameComida, Dolares, lorem, clickSave }) => {
  const [showOpciones, setShowOpciones] = useState(false);
  const [iconoChange, setIconoChange] = useState('/iconDeseados.svg');

  // Al hacer click a fuera se cerrara el menu de compra
  const boxRef = useRef(null);
  const toggleVisibility = (e) => {
    e.stopPropagation();
    setShowOpciones(!showOpciones);
  };
  useEffect(() => {
    let handle = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setShowOpciones(false);
      }
    };
    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  }, [boxRef, setShowOpciones]);

  //agregar en favoritos y animacion de icono toggle icono



  const saveAndToggleIcon = () => {
    iconoChange === '/iconDeseados.svg'
      ? setIconoChange("/iconDeseadosActivo.svg")
      : setIconoChange('/iconDeseados.svg');
    clickSave();
  };

  return (
    <>
      <Box ref={boxRef}>
        <NombreComida>{NameComida}</NombreComida>
        <BoxImg>
          <Img src={src} alt={alt} width={500} />
        </BoxImg>
        <BoxTexto>
          <Precio>{Dolares}$</Precio>
          <Descripcion>{lorem}</Descripcion>
        </BoxTexto>
        <Opciones
          initial={false}
          variants={variants}
          animate={showOpciones ? "Activo" : "Inactivo"}
        >
          <BoxComprar>
            <Button onClick={toggleVisibility} data-active={showOpciones}>
              Comprar
            </Button>
          </BoxComprar>

          <BoxFavoritos>
            <Favoritos
              src={iconoChange}
              alt=""
              onClick={saveAndToggleIcon}
              whileTap={{ scale: 1.1 }}
            />
          </BoxFavoritos>
        </Opciones>
      </Box>
    </>
  );
};

export default Card;
