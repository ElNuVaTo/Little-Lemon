import Link from "next/link";
import styled from "styled-components";

const MenuOption = styled.div`
  width: 80%;
  margin: 15px auto;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: system-ui;
  display: block;
  padding: 5px 10px;
  margin: auto;
  border-radius: 5px;
  &:hover {
    background-color: #b6decb;
    color: #4c5d55;
  }
`;

const Opciones = () => {
  return (
    <>
      <MenuOption>
        <StyledLink href="/sesion/">Iniciar Sesion</StyledLink>
      </MenuOption>
      <MenuOption>
        <StyledLink href="/">Ofertas</StyledLink>
      </MenuOption>
      <MenuOption>
        <StyledLink href="/">Historial</StyledLink>
      </MenuOption>
      <MenuOption>
        <StyledLink href="/">Ayuda</StyledLink>
      </MenuOption>
      <MenuOption>
        <StyledLink href="/">Acerca de Little Lemon</StyledLink>
      </MenuOption>
    </>
  );
};

export default Opciones;
