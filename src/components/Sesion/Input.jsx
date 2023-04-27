import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 40px;
  max-width: 250px;
  position: relative;
  margin: 20px 0;
`;

const InputTexto = styled.input`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: 2px solid #dddddd;
  border-radius: 3px;
  padding: 0 10px;
  &:focus {
    outline: none;
    border-color: #8e8e8e;
  }
  &[data-validate="false"] {
    background-color: #ca513e68;
    border: 2px solid #ca513e;
  }
  &[data-validate="true"] {
    background-color: #b6decb;
    border: 2px solid #1bab68;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 12px;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 3px;
  pointer-events: none;
  font-family: system-ui;
  padding: 0 10px;
  transition: ease-out 0.3s;
  color: #696969;
  &[data-texto="false"] {
  }
  &[data-texto="true"] {
    transform: translate(-5px, -30px);
    color: white;
  }
`;

const Input = ({ htmlFor, onChange, validacion, estado }) => {
  const [label, setLabel] = useState(null);

  useEffect(() => {
    if (estado && estado.length > 0) {
      setLabel(true);
    }
  }, [estado]);

  const focus = () => {
    setLabel(true);
  };

  const blur = () => {
    setLabel(estado && estado.length > 0);
  };

  return (
    <>
      <Box>
        <Label htmlFor={htmlFor} data-texto={label}>
          {htmlFor}
        </Label>
        <InputTexto
          id={htmlFor}
          type="text"
          onChange={onChange}
          data-validate={validacion}
          onFocus={focus}
          onBlur={blur}
        />
      </Box>
    </>
  );
};

export default Input;
