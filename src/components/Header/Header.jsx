import React, { useState } from 'react';
import "./Header.css"
import Logo from "../../assets/images/logo.svg"
import Hambtn from "../../assets/images/icon-hamburger.svg"
import Closebtn from "../../assets/images/icon-close.svg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const HideMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header>
      <nav className='nav w-[80%] mx-auto my-0 py-8 flex flex-col md:flex-row md:justify-between'>
        <div className='logo flex justify-between'>
          <a href=""><img src={Logo} alt=" logo" /></a>
          <img className={`${showMenu ? 'hide' : ''} hambtn md:hidden w-8`} src={Hambtn} alt="" onClick={ShowMenu} />
          <img className={`${showMenu ? '' : 'hide'} md:hidden closebtn w-8 lg:hidden `} src={Closebtn} alt="" onClick={HideMenu} />
        </div>
        <ul className={`Navigation-menu ${showMenu ? 'show' : ''} navlinks flex flex-col md:flex-row md:justify-between w-full md:w-[400px]`}>
          <li><a href=""></a>About</li>
          <li><a href=""></a>Carrers</li>
          <li><a href=""></a>Event</li>
          <li><a href=""></a>Products</li>
          <li><a href=""></a>Supports</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header