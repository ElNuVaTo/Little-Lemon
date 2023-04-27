"use client";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "@/components/GlobalContext";

import Opciones from "./Opciones";
import SaveFavoritos from "./SaveFavoritos";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  padding: 8px 5px;
  background-color: #38443e;
  z-index: 6;
`;
const BoxLogo = styled.div`
  height: 100%;
  background-color: #b6decb;
  padding: 2px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const BoxOpciones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  align-items: center;
`;
const BoxIcons = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const Icons = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const BoxDesplegado = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 58px;
  width: 100%;
  padding: 10px;
  background-color: #4c5d55;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 5;
`;
const BoxDesplegadoFavoritos = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 58px;
  width: 100%;
  padding: 10px;
  background-color: #4c5d55;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 5;
  overflow-y: scroll;
  max-height: 400px;
`;

const variants = {
  FavoritosInactivo: {
    opacity: 1,
    height: "100px",
    y: -290,
    transition: {
      duration: 0.35,
    },
  },
  FavoritosActivo: {
    opacity: 1,
    height: "max-content",
    y: 0,
    transition: {
      duration: 0.35,
    },
  },

  noDesplegado: {
    opacity: 1,
    y: -290,
    transition: {
      duration: 0.35,
    },
  },
  desplegado: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

const Navegacion = () => {
  const refDeseados = useRef(null);
  const refCarro = useRef(null);
  const refOptions = useRef(null);
  const refClickDeseados = useRef(null);
  const refClickCarro = useRef(null);
  const refClickOptions = useRef(null);

  const [deseados, setDeseados] = useState(false);
  const [carro, setCarro] = useState(false);
  const [options, setOptions] = useState(false);

  const toggleDeseados = () => setDeseados(!deseados);
  const toggleCarro = () => setCarro(!carro);
  const toggleMenu = () => setOptions(!options);

  // AL hacer click fuera del contenedor se pondra en false
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        refDeseados.current &&
        !refDeseados.current.contains(event.target) &&
        refClickDeseados.current &&
        !refClickDeseados.current.contains(event.target) &&
        deseados
      ) {
        setDeseados(false);
      }
      if (
        refCarro.current &&
        !refCarro.current.contains(event.target) &&
        refClickCarro.current &&
        !refClickCarro.current.contains(event.target) &&
        carro
      ) {
        setCarro(false);
      }
      if (
        refOptions.current &&
        !refOptions.current.contains(event.target) &&
        refClickOptions.current &&
        !refClickOptions.current.contains(event.target) &&
        options
      ) {
        setOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [deseados, carro, options]);

  // Volver a la pagina de inicio con el logo
  const router = useRouter();
  const clickInicio = (e) => router.push("/");

  // Array con los favoritos guardados Global
  const { saveFavoritos, setSaveFavoritos } = useContext(GlobalContext);

  return (
    <>
      <Nav>
        <BoxLogo onClick={clickInicio}>
          <Logo src="/imgLogoNav.png" alt="" />
        </BoxLogo>

        <BoxOpciones>
          <BoxIcons onClick={toggleDeseados} ref={refClickDeseados}>
            <Icons src="/iconDeseados.svg" alt="" />
          </BoxIcons>

          <BoxIcons onClick={toggleCarro} ref={refClickCarro}>
            <Icons src="/iconCarrito.svg" alt="" />
          </BoxIcons>

          <BoxIcons onClick={toggleMenu} ref={refClickOptions}>
            <Icons src="/iconNavegacion.svg" alt="" />
          </BoxIcons>
        </BoxOpciones>
      </Nav>

      <BoxDesplegadoFavoritos
        ref={refDeseados}
        initial={false}
        variants={variants}
        animate={deseados ? "FavoritosActivo" : "FavoritosInactivo"}
      >
        {saveFavoritos.map((item, index) => (
          <div key={index}>
            <SaveFavoritos
              src={item.src}
              precio={item.precio}
              name={item.nombre}
            />
          </div>
        ))}
      </BoxDesplegadoFavoritos>

      <BoxDesplegado
        ref={refCarro}
        initial={false}
        variants={variants}
        animate={carro ? "desplegado" : "noDesplegado"}
      ></BoxDesplegado>

      <BoxDesplegado
        ref={refOptions}
        initial={false}
        variants={variants}
        animate={options ? "desplegado" : "noDesplegado"}
      >
        <Opciones />
      </BoxDesplegado>
    </>
  );
};

export default Navegacion;
