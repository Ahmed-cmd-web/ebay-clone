/** @format */

import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./Appdropdown.css";
import Basketitems from "./Basketitems";
const Appdropdown = ({
  title = "",
  header = "",
  footer = "",
  items = [],
  custom = null,
  minmenuwidth = "100px",
  itempadding = "0px",
  ...styles
}) => {
  const [vis, setVis] = useState(false);
  const sh = () => setVis(!vis);
  return (
    <Dropdown
      onMouseEnter={sh}
      onMouseLeave={sh}
      show={vis}
      style={{ margin: 0,zIndex:999999 }}
      className='header2optdropdown'
    >
      <Dropdown.Toggle as='span' className="dropdown__title">{title}</Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown__menu"
        style={{ minWidth: minmenuwidth, ...styles }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <Dropdown.Item as="div">{header}</Dropdown.Item>
          {items.length > 0 ? (
            items.map((e, i) => {
              return custom ? (
                <Dropdown.Item
                  as="div"
                  className="dropdown__opt"
                  key={i}
                  style={e.title === "sign out" ? { color: "blue" } : null}
                >
                  <Basketitems
                    key={i}
                    quantity={e.quantity}
                    src={e.src}
                    price={e.price}
                    title={e.title}
                    expiry={e.expiry}
                    condition={e.condition}
                    rating={e.rating}
                    style={{ alignItems:'center' }}
                  />
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  as="div"
                  className="dropdown__opt"
                  key={i}
                  style={{
                    color: e.title === "sign out" ? "blue" : "black",
                    padding: itempadding,
                  }}
                  onClick={e.onClick}
                >
                  {e.title || e}
                </Dropdown.Item>
              );
            })
          ) : (
            <Dropdown.Item as="div" className="dropdown__opt">
              {items}
            </Dropdown.Item>
          )}
          <Dropdown.Item as="div">{footer}</Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Appdropdown;
