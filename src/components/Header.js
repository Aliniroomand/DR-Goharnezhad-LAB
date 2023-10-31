import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
//styles
import styles from './Header.module.css';
//images
import menu from '../assets/images/Menu.svg'
import Logo from "../assets/images/mainLoGO (1).png";
import siteTitle from "../assets/images/title (1).png";
import home from '../assets/images/home.svg';
import web from '../assets/images/web.svg';
import adminSvg from '../assets/images/adminSVG.svg'
import results from '../assets/images/document.svg'
import crossIcon from '../assets/images/crossIcon.svg'
import AnimatedPages from './AnimatedPages';


const Header = () => {
const [display,setDisplay]=useState(false);

const dropDownOpenClose=(e)=>{
  setDisplay(prev=>!prev);

}
    return (
      <div >
        <ul className={styles.siteTitle}>
          <div className={styles.logoAndTiltleContainer}>
            <img src={Logo} className={styles.logo} alt="logo"/>
            <img src={siteTitle} className={styles.title} alt="sitle"/>
          </div>
          <li>
            <Link to='/'>صفحه اصلی</Link>
          </li>
          <li>
            <Link to='/site'> وبسایت آزمایشگاه</Link>
          </li>
          <li>
            <Link to='/adminloginpage'>ورود همکاران</Link>
          </li>
          <li>
            <Link to='/resultLoginPage'>صفحه پاسخگویی اینترنتی</Link>
          </li>
          <img src={menu} onClick={dropDownOpenClose} className={styles.menuIcon} alt="menu"/>
          </ul>
          <AnimatedPages>
          { display &&
            <div className={styles.dropDownMenu}>
                <li>
                  <img src={home} alt='home'/>
                  <Link to='/'>صفحه اصلی</Link>
                </li>
                <li>
                  <img src={web} alt='web'/>
                  <Link to='/site'> وبسایت آزمایشگاه</Link>
                </li>
                <li>
                  <img src={adminSvg} alt='admin' />
                  <Link to='/adminloginpage'>ورود همکاران</Link>
                </li>
                <li>
                  <img src={results} alt='results'/>
                  <Link to='/resultLoginPage'>صفحه پاسخگویی اینترنتی</Link>
                </li>
                <li>
                <img src={crossIcon} alt="crossIcon" onClick={dropDownOpenClose}/>
                </li>
            </div>
          }
      </AnimatedPages>
      </div>
    );
};

export default Header;