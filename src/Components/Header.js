import React, { useState } from 'react'
import "../Styles/Header.css"
import { FiMenu } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { MdWbSunny, } from "react-icons/md";


function Header() {
  const [toggleLight, setToggleLight] = useState(true);

  function toggleTheme() {
    setToggleLight(prevState => !prevState);
  }
  return (
    <div className="navbar-wrapper">
      <div className='navbar'>

        <div className="ham-icon"><FiMenu />
        </div>
        <div className="my-name">Mohammad Hashim Mir</div>
        <div className="nav-links">
          <div><a href="#" className="nav-link">Projects</a></div>
          <div><a href="#" className="nav-link">Resume</a></div>
          {/* <div><a href="#" className="nav-link">About</a></div> */}
          {/* <div className="nav-mode">
            <IoMoon
              onClick={toggleTheme}
              className={`moon-icon ${toggleLight ? '' : 'hide'}`}
            />
            <MdWbSunny
              onClick={toggleTheme}
              className={`sun-icon ${toggleLight ? '' : 'show'}`}
            />
          </div> */}
        </div>
      </div>
    </div>


  )
}

export default Header