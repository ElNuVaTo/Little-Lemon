import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  gap: 0 10px;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #b6decb;
    border-color: #b6decb;
  }
`;

const Checkmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: #fafa6c;
  border: 1px solid #fafa6c;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
  }

  div.x-mark {
    display: ${({ checked }) => (checked ? "none" : "block")};
    background-image: url(/iconNoConfirm.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  div.check {
    display: ${({ checked }) => (checked ? "block" : "none")};
    background-image: url(/iconConfirm.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const P = styled.p`
  font-family: system-ui;
  font-size: 13px;
  color: white;
`;

const CheckBox = ({ Texto }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <Label>
        <Input type="checkbox" checked={checked} onChange={toggleChecked} />
        <Checkmark checked={checked}>
          <div className="x-mark" />
          <div className="check" />
        </Checkmark>
      </Label>
      <P>{Texto}</P>
    </Container>
  );
};

export default CheckBox;
