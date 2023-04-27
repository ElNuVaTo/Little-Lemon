import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import Input from "./Input";
import CheckBox from "./CheckBox";

const BoxForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 90%;
  min-width: 300px;
  max-width: 350px;
  background-color: #4c5d55;
  padding: 25px 5px;
  border-radius: 10px;
  position: relative;
`;
const H1 = styled.h1`
  font-family: monospace;
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #fafa6c;
  color: black;
  font-family: monospace;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #2b3d38;
  }
`;
const BoxBox = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  gap: 0 5px;
  p {
    font-family: system-ui;
    font-size: 12px;
    color: white;
  }
`;
const Click = styled.a`
  font-family: system-ui;
  font-size: 12px;
  cursor: pointer;
  color: black;
`;
const BoxClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Login = ({ variants, toggleSesion, initial, animate }) => {
  const [usuarioTexto, setUsuarioTexto] = useState("");
  const [usuarioValidacion, setUsuarioValidacion] = useState(null);

  const [contraseñaTexto, setContraseñaTexto] = useState("");
  const [contraseñaValidacion, setContraseñaValidacion] = useState(null);

  const userChange = (e) => {
    setUsuarioTexto(e.target.value);
    setUsuarioValidacion(e.target.value.length <= 3 ? false : true);
  };

  const contraseñaChange = (e) => {
    setContraseñaTexto(e.target.value);
    setContraseñaValidacion(e.target.value.length <= 3 ? false : true);
  };

  const router = useRouter();
  const handleClick = () => router.push("/");


  return (
    <>
      <BoxForm variants={variants} initial={initial} animate={animate}>
        <BoxClose onClick={handleClick}>
          <img
            src="/iconCerrar.svg"
            alt="Icono para cerrar la pesta de sesion"
          />
        </BoxClose>

        <H1>Acceder</H1>
        <Input
          htmlFor={"Nombre de usuario o correo electrónico"}
          onChange={userChange}
          validacion={usuarioValidacion}
          estado={usuarioTexto}
        />

        <Input
          htmlFor={"Contraseña"}
          onChange={contraseñaChange}
          validacion={contraseñaValidacion}
          estado={contraseñaTexto}
        />

        <CheckBox Texto={"Guardar sesion"} />

        <Button>Login</Button>
        <BoxBox>
          <p>¿Sin cuenta?</p>
          <Click onClick={toggleSesion}>Registrarse</Click>
        </BoxBox>
        <BoxBox>
          <p>¿Contraseña Olvidada?</p>
          <Click>Cambiar contraseña</Click>
        </BoxBox>
      </BoxForm>
    </>
  );
};

export default Login;
