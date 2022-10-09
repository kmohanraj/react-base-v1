import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/header.scss';

export interface IMenusProps {
  path: string,
  name: string
}

const Menus = [
  {
    path: '/',
    name: 'Dashboard'
  },
  {
    path: '/organizations',
    name: 'Organizations'
  },
  {
    path: '/branches',
    name: 'Branches'
  },
  {
    path: '/users',
    name: 'Users'
  },
  {
    path: '/customers',
    name: 'Customers'
  },
  {
    path: '/groups',
    name: 'Groups'
  }
]

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Company Name</Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        { Menus.map((ele: IMenusProps) => (
          <li><Link to={ele.path}>{ele.name}</Link></li>
        ))}
      </ul>
    </header>
  )
}
export default Header;
