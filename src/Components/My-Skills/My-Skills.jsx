import React from 'react';
import "./My-Skills.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselSlides from './Carousel/CarouselSkills';
const MySkills = () => {
  return (
    <>
      <div className="mySkill" id='myskill'>
        <div className="title">
          My Skills
        </div>
        <CarouselSlides />
      </div>
    </>
  );
};

export default MySkills;
