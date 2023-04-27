"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";
import { useContext } from "react";
import { GlobalContext } from "@/components/GlobalContext";

const SliderWrapper = styled(motion.div)`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #b6decb;
  padding: 10px 30px;
  gap: 0 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled(motion.div)`
  flex: 0 0 auto;
  width: 200px;
  height: 350px;
  overflow: hidden;
  border-radius: 3px;
`;

const CardMap = () => {
  const { saveFavoritos, setSaveFavoritos } = useContext(GlobalContext);
  const { getComida, setGetComida } = useContext(GlobalContext);
  const [sliderX, setSliderX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const distance = info.offset.x;
    const threshold = sliderWidth / 10;
    if (distance > threshold) {
      setSliderX((prev) => prev - containerWidth);
    } else if (distance < -threshold) {
      setSliderX((prev) => prev + containerWidth);
    }
  };

  const handleResize = () => {
    setContainerWidth(document.querySelector(".slider-container").clientWidth);
    setSliderWidth(document.querySelector(".slider-wrapper").scrollWidth);
  };

  // Funcion para guardar el item

  const clickSave = (item) => {
    saveFavoritos.includes(item)
      ? setSaveFavoritos(saveFavoritos.filter((f) => f !== item))
      : setSaveFavoritos([...saveFavoritos, item]);
  };

  return (
    <div
      className="slider-container"
      onLoad={handleResize}
      onResize={handleResize}
    >
      <SliderWrapper
        className="slider-wrapper"
        style={{ x: sliderX }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        drag={isDragging ? "x" : false}
        dragConstraints={{ left: -(sliderWidth - containerWidth), right: 0 }}
        dragElastic={1}
        transition={{ type: "tween" }}
      >
        {getComida.map((item, index) => (
          <SliderItem key={index}>
            <Card
              NameComida={item.nombre}
              Dolares={item.precio}
              src={item.src}
              alt={item.desc}
              lorem={item.desc}
              clickSave={() => clickSave(item)}
            />
          </SliderItem>
        ))}
      </SliderWrapper>
    </div>
  );
};

export default CardMap;
