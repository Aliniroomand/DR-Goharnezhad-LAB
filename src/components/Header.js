import React from 'react';
 import { Link } from 'react-router-dom';
//styles
import styles from './Header.module.css';
//images
import menu from '../assets/images/Menu.svg'
import Logo from "../assets/images/mainLoGO (1).png";
import siteTitle from "../assets/images/title (1).png";

const Header = () => {
    return (
        <div >
        <ul className={styles.siteTitle}>
          <div>
          <img src={Logo} className={styles.logo} alt="logo"/>
          <img src={siteTitle} className={styles.title} alt="sitle"/>
          </div>
          <li>
          </li>
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
            <Link to='/results'>صفحه پاسخگویی اینترنتی</Link>
          </li>
          <img src={menu} className={styles.menuIcon} alt="menu"/>
          <div className={styles.dropDownMenu}>
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
                <Link to='/results'>صفحه پاسخگویی اینترنتی</Link>
              </li> 
          </div>
        </ul>
      </div>
    );
};

export default Header;