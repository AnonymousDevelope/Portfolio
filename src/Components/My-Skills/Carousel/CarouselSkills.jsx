import React, {  memo, useEffect, useMemo, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import HTML from "../../../assets/images/HTML.png";
import CSS from "../../../assets/images/CSS.png";
import Git from "../../../assets/images/Git.png";
import JS from "../../../assets/images/JS.png";
import MDB from "../../../assets/images/MDB.png";
import Cpp from "../../../assets/images/C++.png";
import Cs from "../../../assets/images/Csharp.png";
import Python from "../../../assets/images/Python.png";
import ReactRed from "../../../assets/images/ReactRedux.png";
import Scratch from "../../../assets/images/SCRATCH.png";
import SCSS from "../../../assets/images/SCSS.png";
import hbs from "../../../assets/images/handlebars_logo.png";
import { v4 as uuidv4 } from "uuid";
import "./CarouselSkill.css"
let i = 0;
const CarouselSlides = () => {
  const [attrSlide, setAttrSlide] = useState({
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: false,
    enableSwipe: true,
    config: config.slow,
  })
  //kerak
  const slides = [
    {
      key: uuidv4(),
      content: (<>
        <img src={HTML} alt="HTML" />
        <span>HTML</span>
      </>
      )
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={CSS} alt="CSS" />
          <span>CSS</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={Git} alt="Git" />
          <span>Git</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={JS} alt="JavaScript" />
          <span>JavaScript</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={MDB} alt="MDB" />
          <span>MongoDB</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={Cpp} alt="C++" />
          <span>C++</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={Cs} alt="C#" />
          <span>C#</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={Python} alt="Python" />
          <span>Python</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={ReactRed} alt="React & Redux" />
          <span>React & Redux</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={Scratch} alt="Scratch" />
          <span>Scratch</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={SCSS} alt="SCSS" />
          <span>SCSS</span>
        </>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <>
          <img src={hbs} alt="Handlebars" />
          <span>Handlebars</span>
        </>
      ),
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () =>{ setAttrSlide({ goToSlide: index}) 
    attrSlide.goToSlide=index;
  } };
  });
  //kerak
  //kerak emas
  useEffect(() =>{
    setTimeout(()=>{
      i++;
      setAttrSlide({goToSlide:attrSlide.goToSlide+1})
    },2000);
  } , [i])
  //
  return (
    <div
      style={{ width: "70%", height: "200px", margin: "0 auto" ,marginTop:"25px"}}
      className="skills"
    >
      <Carousel
        slides={slides}
        goToSlide={attrSlide.goToSlide}
        offsetRadius={attrSlide.offsetRadius}
        showNavigation={attrSlide.showNavigation}
        animationConfig={attrSlide.config}
      />
    </div>
  );

};
export default memo(CarouselSlides);
