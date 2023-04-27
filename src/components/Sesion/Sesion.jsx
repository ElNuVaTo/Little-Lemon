import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import Registrarse from "./Registrarse";
import Login from "./Login";
import Fondo from "./Fondo";

const Box = styled.div`
  padding: 50px 0 0 0;
  width: 100%;
  height: calc(100vh - 58px);
  overflow: hidden;
  position: relative;
`;

const variants = {
  login: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },

  registrarse: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.75,
    },
  },
  normal: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const Sesion = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  const [registrarseVisible, setRegistrarseVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(true);
    setRegistrarseVisible(false);
  };

  const toggleRegistrarse = () => {
    setLoginVisible(false);
    setRegistrarseVisible(true);
  };

  return (
    <>
      <Box>
        <Fondo />
        <AnimatePresence>
          {loginVisible && (
            <Login
              key="login"
              variants={variants}
              initial="login"
              animate="normal"
              exit="login"
              toggleSesion={toggleRegistrarse}
            />
          )}
          {registrarseVisible && (
            <Registrarse
              key="registrarse"
              variants={variants}
              initial="registrarse"
              animate="normal"
              exit="registrarse"
              toggleSesion={toggleLogin}
            />
          )}
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Sesion;
