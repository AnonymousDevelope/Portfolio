import React from 'react'
import AlanAI from "../../assets/images/alanAi.png"
import "./MyWorks.css"
import {powerOff} from  "fontawesome"
import "font-awesome/css/font-awesome.css"
import CarouselPlanshet from './CarouselPlanshet/CarouselPlanshet'
const MyWorks = () => {
  return (
    <div className="myWorks" id='mywork'>
      <div className="title">
        My Works
      </div>
      <div className="worksList">
        {/* <div className="planshet block shadow">
          <div className="content d-flex flex-column">
            <div className="navbarPlanshet bg-none">
              <ul className="news gap-1">
                <li><i className="fa fa-telegram text-success"></i></li>
                <li><i className="fa fa-instagram text-danger"></i></li>
                <li><i className="fa fa-twitter text-primary"></i></li>
              </ul>
              <ul className='indicators'>
                <li><i className="fa fa-soundcloud"></i></li>
                <li className="battery"><i className="fa fa-signal"></i></li>
                <li className="battery"><i className="fa fa-signal"></i></li>
                <li className="battery"><i className='fa fa-battery-3'></i></li>
              </ul>
            </div>
            <div className="img">
            <img src={AlanAI} alt="" />
            </div>
          </div>
        </div> */}
        <CarouselPlanshet />
      </div>
    </div>
  )
}

export default MyWorks
 //ishlar qo'shilishi kerak