import React from 'react'
import './Header.css'
import { Notifications, Textsms } from '@material-ui/icons';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="icons-container">
        <img src={logo} width={32} height={32} />
      </div>
      <button>Home</button>
      <button>Today</button>
      <input type="text" id="lname" name="lname" className="search"></input>
      <div className="icons-container">
        <Notifications />
        <Textsms />
      </div>
    </div>
  )
}

export default Header