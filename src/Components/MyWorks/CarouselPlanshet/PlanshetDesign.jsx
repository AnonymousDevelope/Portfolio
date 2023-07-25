import React from 'react'
import "../MyWorks.css"
const PlanshetDesign = ({ img }) => {
  return (
    <div className="planshet block shadow">
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
          <a href="#?" className="nav-link">
            <img src={img} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PlanshetDesign