import React from 'react'
import './Categories.css'
function Categories(props) {
    return (
      <div className="Categories">
        <div className="catcon">
          <a href={props.href}>
            {" "}
            <img className="Categoryimg" src={props.src} alt={props.alt} />
            <h4 className="category_name">{props.name}</h4>
          </a>
        </div>
      </div>
    );
}

export default Categories
