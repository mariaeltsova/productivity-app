import { NavLink } from "react-router-dom";
import { useState } from "react";
import  styles from './Navbar.module.css';

const data = [
  {
    title: "Welcome",
    link: "/",
  },
  {
    title: "Todo list",
    link: "/todo/",
  },
  {
    title: "Habits",
    link: "/habits/",
  },
 /* {
    title: "Login",
    link: "/login/",
  },*/
  {
    title: "Finance",
    link: "/finance/",
  },
  {
    title: "Table",
    link: "/table/",
  },*/
];

export function Menu({setMainDivVisibility}) {
  const [navs] = useState(data);
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
    setMainDivVisibility(isActive)
  };
  const removeActive = () => {
    setIsActive(false)
    setMainDivVisibility(true)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <a href='/' className={`${styles.logo}`}>Maria. </a>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          {navs.map((nav, index) => (
      <li className="menuItem" key={index} onClick={removeActive}>
        <a href={nav.link} className={`${styles.navLink}`}>{nav.title}</a>
      </li>))}
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>

      </header>
    </div>
  );

}
