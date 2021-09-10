import React from 'react'
import './Header.css'
import  Headermid from "./Headermid";
import Headerbottom from "./Headerbottom";
import Headertop2 from './Headertop2';




function Header() {
    return (
      <div className="header">
        <Headertop2 />
        <Headermid />
        <Headerbottom />
      </div>
    );
}

export default Header
