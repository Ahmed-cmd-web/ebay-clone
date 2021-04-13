import React from 'react'
import './Header.css'
import  Headertop  from "./Headertop";
import  Headermid from "./Headermid";
import Headerbottom from "./Headerbottom";




function Header() {
    return (
      <div className="header">
        
        <Headertop />
        <Headermid />
        <Headerbottom />
      </div>
    );
}

export default Header
