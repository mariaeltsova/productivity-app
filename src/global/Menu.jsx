import { NavLink } from "react-router-dom";
import { useState } from "react";
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
  {
    title: "Login",
    link: "/login/",
  },
  {
    title: "Finance",
    link: "/finance/",
  },
  {
    title: "Table",
    link: "/table/",
  },
];

export function Menu() {
  const [navs] = useState(data);
  return (
    <ul className="menu">
        {navs.map((nav, index) => (
      <li className="menuItem" key={index}>
        <NavLink to={nav.link} className="navLink">{nav.title}</NavLink>
      </li>))}

    </ul>
  );
}
