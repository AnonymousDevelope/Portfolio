import { useState } from 'react'
import { AboutMe, MySkills, MyWorks, Navbar,Contacts } from "./Components"
import "./style/App.css"
function App() {
  return (
    <>
      <div className="page">
        <div className="innerPart">
          {/* Navbar */}
          <Navbar />
          {/*  */}
          {/* AboutMe */}
          <AboutMe />
          {/*  */}
          {/* My Skills */}
          <MySkills />
          {/*  */}
          {/* My Skills */}
          <MyWorks />
          {/*  */}
          {/* Contacts */}
          <Contacts />
          {/*  */}
        </div>
      </div>
    </>
  )
}

export default App
