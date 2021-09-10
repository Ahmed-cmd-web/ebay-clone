/** @format */

import React, { useState } from "react";
import "./Appoffcanvas.css";
import { FiMenu } from "react-icons/fi";
import {
  Drawer,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
  Badge,
} from "@material-ui/core";
import headerdrp from "./content/headerdrp";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Basketitems from "./Basketitems";
import CurrencyFormat from "react-currency-format";
import { total } from "./reducer";
import { useHistory } from "react-router";

const Appoffcanvas = ({ cartlength = 0, cartitems = [] }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [open, setopen] = useState(false);
  const [openbasket, setOpenbasket] = useState(false);
  return (
    <div>
      <FiMenu onClick={() => setVisible(true)} size={20} className="menuicon" />
      <Drawer
        style={{ width: "100%" }}
        anchor="right"
        open={visible}
        onClose={() => setVisible(false)}
      >
        <List
          style={{ width: "100%" }}
          subheader={
            <ListSubheader component="div" style={{ fontSize: "25px" }}>
              Menu
            </ListSubheader>
          }
        >
          {headerdrp.listitems.map((e, i) => (
            <ListItem
              key={i}
              className="MuiListItem-alignItemsFlexStart listitem"
              onClick={() => setopen(!open)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.hasicon && <ListItemIcon>{e.icon}</ListItemIcon>}
                <ListItemText primary={e.name} />
                {e.expands && (open ? <ExpandLess /> : <ExpandMore />)}
              </div>
              {e.expands && (
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit
                  style={{ width: "100%" }}
                >
                  {e.items.map((j, d) => (
                    <ListItemText primary={j} key={d} className="listitemdrp" />
                  ))}
                </Collapse>
              )}
            </ListItem>
          ))}
          <ListItem
            onClick={() => setOpenbasket(!openbasket)}
            className="MuiListItem-alignItemsFlexStart listitem"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <Badge badgeContent={cartlength} color="error">
                  <ShoppingCartOutlinedIcon className="bell" />
                </Badge>
              </ListItemIcon>
              <ListItemText primary={"Shopping Cart"} />
              {openbasket ? <ExpandLess /> : <ExpandMore />}
            </div>
            <Collapse
              in={openbasket}
              timeout="auto"
              unmountOnExit
              style={{ width: "100%" }}
            >
              {cartitems.map((e, i) => (
                <Basketitems
                  key={i}
                  quantity={e.quantity}
                  src={e.src}
                  price={e.price}
                  title={e.title}
                  expiry={e.expiry}
                  condition={e.condition}
                  rating={e.rating}
                  style={{
                    padding: "5px 5px",
                    borderBottom: "1px solid #e5e5e5",
                    width: "100%",
                  }}
                />
              ))}
              <ListItemText>
                <div className="total">
                  <div
                    style={{
                      width: "95%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "grey" }}>Total</span>
                    <CurrencyFormat
                      style={{ fontWeight: "bolder" }}
                      value={total(cartitems)}
                      prefix={"$"}
                      thousandSeparator={true}
                      decimalScale={2}
                      displayType={"text"}
                    />
                  </div>
                </div>
              </ListItemText>
              <ListItemText>
                <button
                  onClick={() => history.push("/cart")}
                  className="viewcartbutton"
                  disabled={cartlength > 0 ? false : true}
                >
                  View cart
                </button>
              </ListItemText>
            </Collapse>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Appoffcanvas;
