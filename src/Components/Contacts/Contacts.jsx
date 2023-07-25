import React from 'react'
import "./Contacts.css"
import Logo from '../Logo/Logo'
const Contacts = () => {
  return (
    <footer>
      <div className="contacts" id="contacts">
        <div className="title">
          Contact Us
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row logo-for-resp">
              <Logo className={"d-flex  justify-content-center"} /> 
                <div className = "clearfix" >

                </div>
            </div>
            <div className="row links">
              <div className="col-md  shadow p-3">
                <a href="" className="nav-link fs-5">AnonymousDevelope <i className="fa fa-github"></i></a>
              </div>
              <div className="col-md shadow p-3">
                <a href="" className="nav-link fs-5">@IT_Technology_01 <i className="fa fa-telegram"></i></a>
              </div>
            </div>
            <div className="row links">
              <div className="col-md shadow p-3">
                <a href="" className="nav-link fs-5">anonymousdev_2005 <i className="fa fa-instagram"></i></a>
              </div>
              <div className="col-md shadow p-3">
                <a href="" className="nav-link fs-5">ProgramlifeSultonov <i className="fa fa-facebook"></i></a>
              </div>
            </div>
            <div className="row links">
              <div className="col-md shadow p-3">
                <a href="" className="nav-link fs-5 text-center">hayotsultonov2005@mail.ru  <i className="fa fa-envelope"></i></a>
              </div>
              <div className="col-md shadow p-3">
                <a href="" className="nav-link fs-5 text-center">anonymousdeveloper2005@gmail.com <i className="fa fa-google"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title d-flex justify-content-center">
              Contact US
            </div>
            <form action="" className="form">
                <label htmlFor="name"> </label>
                <input type="text" className='form-control shadow'  placeholder='Ismingiz Familiyangiz . . .' id='name' name='name' />
                <label htmlFor="email"></label>
                <input type="email" className='form-control shadow' placeholder='Pochta manzilingiz . . .' id='email' name='email' />
                <label htmlFor="message"> </label>
                <textarea name="message" id="message"  rows="6" placeholder='Xabarni kiriting . . .' className='form-control shadow'></textarea>
                <button type="submit" className='btn shadow d-flex btn-outline-secondary my-2 mx-auto'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contacts