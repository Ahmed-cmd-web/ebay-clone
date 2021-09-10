/** @format */

import React from "react";
import "./Body.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Categories from "./Categories";
import Product from "./Product";
import { connect } from "react-redux";
import Arrow from "./Arrow";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import products from "./content/products";
function Body(props) {
  return (
    <div className="ebaybody">
      <div className="banner">
        <div className="bannerleft">
          <a href="ex">
            {" "}
            <h2 className="bannertitle">
              Items From <br />
              China Arrive in 2<br />
              Weeks
            </h2>
          </a>

          <span>
            Choose SpeedPAK for faster
            <br /> delivery
          </span>
          <button>
            Shop Now
            <ArrowForwardIcon className="shop" />{" "}
          </button>
        </div>
        <div className="bannerright">
          <a href="ex">
            <img
              src="https://i.ebayimg.com/images/g/kfsAAOSwhZhdySO7/s-l960.webp"
              alt=""
            />
          </a>
        </div>
      </div>

      {props.prop2.reducer3.length === 0 ? (
        ""
      ) : (
        <div className="recentlyviewed">
          <h2>Your Recently Viewed Items</h2>
          <div className="content__rec">
            {props.prop2.reducer3
              .filter((v, i, a) => a.findIndex((t) => t.src === v.src) === i)
              .map((item) => (
                <Product
                  key={item.src}
                  src={item.src}
                  price={item.price}
                  title={item.title}
                  expiry={item.expiry}
                  condition={item.condition}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>
      )}

      <div className="popularcat">
        <h2 className="title__pop">Explore Popular Categories</h2>
        <div className="content__pop">
          {products.catgs1.map((e, i) => (
            <Categories key={i} src={e.src} alt="" name={e.name} href="ex" />
          ))}
        </div>
      </div>
      <div className="Deals">
        <a href="ex">
          {" "}
          <h2 className="dealstitle">Daily Deals</h2>
          <h2 className="more">
            See all
            <ArrowForwardIcon className="x" />{" "}
          </h2>
        </a>
        <div id="1" className="dealscon">
          {" "}
          <Arrow
            onClick={() => (document.getElementById("1").scrollLeft -= 1100)}
            direction="left"
          >
            <IoIosArrowBack />
          </Arrow>
          {products.products1.map((e, i) => (
            <Product
              key={i}
              rating={3}
              title={e.title}
              condition={e.condition}
              expiry={e.expiry}
              src={e.src}
              price={e.price}
            />
          ))}
          <Arrow
            onClick={() => (document.getElementById("1").scrollLeft += 1100)}
            direction="right"
          >
            <IoIosArrowForward />
          </Arrow>
        </div>
      </div>
      <div className="popularcat2">
        <a className="popularcat2link" href="ex">
          <h2 className="title__pop2">Explore popular categories</h2>{" "}
          <h2 className="more" style={{ marginLeft: "20px" }}>
            See all
            <ArrowForwardIcon className="x" />{" "}
          </h2>
        </a>
        <div className="content__pop">
          {products.catgs2.map((e, i) => (
            <Categories
              key={i}
              src={e.src}
              alt=""
              name={e.name}
              href="ex"
            />
          ))}
        </div>
      </div>
      <div className="Deals">
        <a href="ex">
          {" "}
          <h2 className="dealstitle">Men's Coats & Jackets</h2>
          <h2 className="more">
            See all
            <ArrowForwardIcon className="x" />{" "}
          </h2>
        </a>
        <div className="rec" style={{ marginLeft: "10px" }}>
          Recommended for you
        </div>
        <div id="2" className="dealscon">
          <Arrow
            onClick={() => (document.getElementById("2").scrollLeft -= 1100)}
            direction="left"
          >
            <IoIosArrowBack />
          </Arrow>
          {products.products2.map((e, i) => (
            <Product
              key={i}
              rating={3}
              title="stand camera"
              condition={true}
              expiry="july 2"
              src={e.src}
              price={e.price}
            />
          ))}

          <Arrow
            onClick={() => (document.getElementById("2").scrollLeft += 1100)}
            direction="right"
          >
            <IoIosArrowForward />
          </Arrow>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    prop2: state,
  };
};

export default connect(mapStateToProps)(Body);
