"use client"
import Banner from "@/components/Banner/Banner"
import MenuDeComida from "@/components/MenuComida/CardMap"
import styled from "styled-components";

const Box = styled.div`
padding: 10px 0;
 min-height: calc(100vh - 58px);
 background-color: #b6decb;
`;

const Home = () => {
  return (
    <Box>
      <Banner/>
      <MenuDeComida/>
    </Box>
  )
}

export default Home