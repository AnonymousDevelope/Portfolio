import React, { useState } from 'react'
import { config } from 'react-spring';
import Carousel from 'react-spring-3d-carousel';
import PlanshetDesign from './PlanshetDesign';
import { v4 as uuidv4 } from "uuid";
import alanAI from "../../../assets/images/alanAi.png"
import TestApp from "../../../assets/images/myTestApp.png"
import CRUDJSONAPI from "../../../assets/images/CRUD&JSON.png"
const CarouselPlanshet = () => {

  const [attrSlide, setAttrSlide] = useState({
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: false,
    enableSwipe: true,
    config: config.wobbly,
  })
  const slides = [
    {
      key: uuidv4(),
      content: (<>
        <PlanshetDesign img={alanAI} />
      </>)
    },
    {
      key: uuidv4(),
      content: <>
        <PlanshetDesign img={TestApp} />
      </>,
    },
    {
      key: uuidv4(),
      content: <>
        <PlanshetDesign img={CRUDJSONAPI} />
      </>,
    },
    {
      key: uuidv4(),
      content: <>
        <PlanshetDesign img={TestApp} />
      </>,
    },
  ].map((slide, index) => {
    return {
      ...slide, onClick: () => {
        setAttrSlide({ goToSlide: index })
      }
    };
  });
  return (
    <div
      style={{ width: "80%", height: "200px", margin: "0 auto", marginTop: "65px" }}
      className='worksTable'
    >
      <Carousel
        slides={slides}
        goToSlide={attrSlide.goToSlide}
        offsetRadius={attrSlide.offsetRadius}
        showNavigation={attrSlide.showNavigation}
        animationConfig={attrSlide.config}
      />
    </div>
  )
}

export default CarouselPlanshet