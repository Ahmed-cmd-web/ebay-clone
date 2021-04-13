/** @format */

import React from "react";
import "./Body.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Categories from "./Categories";
import Product from "./Product";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { connect } from "react-redux";
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
          <Categories
            src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp"
            alt=""
            name="Sneakers"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/91EAAOSwFZpf4xc6/s-l200.webp"
            alt=""
            name="Korean beauty"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/I~oAAOSwHXRf4xc6/s-l200.webp"
            alt=""
            name="Wrist-watches"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/JVwAAOSw5c5f4xc6/s-l200.webp"
            alt=""
            name="Fishing"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/VHcAAOSwimhf4xc5/s-l200.webp"
            alt=""
            name="Collectibles"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/p30AAOSw1A1f4xc6/s-l200.webp"
            alt=""
            name="Smart-phones"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/mTcAAOSwPzVf4xc4/s-l200.webp"
            alt=""
            name="Sell"
            href="ex"
          />
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
          <button
            className="reverse"
            onClick={() => (document.getElementById("1").scrollLeft -= 1100)}
          >
            {" "}
            <ArrowBackIosIcon />
          </button>
          <Product
            key={1}
            rating={3}
            title="stand camera"
            condition={false}
            expiry="september 21"
            src="https://i.ebayimg.com/images/g/TwIAAOSwPzhgGsFO/s-l225.webp"
            price={284.99}
          />
          <Product
            key={2}
            rating={3}
            title="stand camera"
            condition={false}
            expiry="november 21"
            src="https://i.ebayimg.com/images/g/rOEAAOSw9GhYdF~Y/s-l225.webp"
            price={64.95}
          />
          <Product
            key={3}
            rating={3}
            title="stand camera"
            condition={false}
            expiry="october 21"
            src="https://i.ebayimg.com/images/g/fVIAAOSwmOBb31ZW/s-l225.webp"
            price={54.95}
          />
          <Product
            key={4}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <Product
            key={5}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/SrUAAOSw44BYf37K/s-l225.webp"
            price={138.0}
          />
          <Product
            key={6}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/pycAAOSwbYpgBXVC/s-l225.webp"
            price={124.1}
          />
          <Product
            key={7}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/N~AAAMXQjwVQ9TvW/s-l225.webp"
            price={79.99}
          />
          <Product
            key={8}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/XpcAAOSw5BtdGoXY/s-l225.webp"
            price={9.99}
          />
          <Product
            key={9}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/jlUAAOSwUwRgGabA/s-l225.webp"
            price={85.0}
          />
          <Product
            key={10}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/3hsAAOSw9hZfc60U/s-l225.webp"
            price={29.99}
          />
          <Product
            key={11}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/0ogAAOSwehZfSMd~/s-l225.webp"
            price={54.99}
          />
          <Product
            key={12}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/Q4kAAOSwACRfSMbj/s-l225.webp"
            price={22.99}
          />
          <Product
            key={13}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <Product
            key={14}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <Product
            key={15}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />{" "}
          <button
            className="scroll"
            onClick={() => (document.getElementById("1").scrollLeft += 1100)}
          >
            {" "}
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className="popularcat2">
        <a className="popularcat2link" href="ex">
          <h2 className="title__pop2">Explore popular categories</h2>{" "}
          <h2 className="more" style={{marginLeft:'20px'}}>
            See all
            <ArrowForwardIcon className="x" />{" "}
          </h2>
        </a>
        <div className="content__pop">
          <Categories
            src="https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp"
            alt=""
            name="Apple"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp"
            alt=""
            name="Samsung"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/uIAAAOSw7PNeJrV1/s-l200.webp"
            alt=""
            name="Sony"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp"
            alt=""
            name="Ugreen"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp"
            alt=""
            name="Xiaomi"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/atoAAOSwZzVeJrV1/s-l200.webp"
            alt=""
            name="Nike"
            href="ex"
          />
          <Categories
            src="https://i.ebayimg.com/images/g/j-MAAOSwaBJeJrV1/s-l200.webp"
            alt=""
            name="Born Pretty"
            href="ex"
          />
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
        <div className="rec" style={{marginLeft:'10px'}}>Recommended for you</div>
        <div id="2" className="dealscon">
          <button
            className="reverse"
            onClick={() => (document.getElementById("2").scrollLeft -= 1100)}
          >
            {" "}
            <ArrowBackIosIcon />
          </button>
          <Product
            key={16}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 2"
            src="https://i.ebayimg.com/images/g/mVQAAOSwmX9fwC-T/s-l225.webp"
            price={44.99}
          />
          <Product
            key={17}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="april 21"
            src="https://i.ebayimg.com/images/g/HfUAAOSwVXRb7K0K/s-l225.webp"
            price={49.99}
          />
          <Product
            key={18}
            rating={3}
            title="stand camera"
            condition={false}
            expiry="june 21"
            src="https://i.ebayimg.com/images/g/7x8AAOSwRo5fQVUM/s-l225.webp"
            price={54.99}
          />
          <Product
            key={19}
            rating={3}
            title="stand camera"
            condition={false}
            expiry="december 21"
            src="https://i.ebayimg.com/images/g/Cn0AAOSwVFJb860o/s-l225.webp"
            price={46.99}
          />
          <Product
            key={20}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="december 2"
            src="https://i.ebayimg.com/images/g/2B0AAOSwXDhf-fA4/s-l225.webp"
            price={69.99}
          />
          <Product
            key={21}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/r9cAAOSwUepfvv6p/s-l225.webp"
            price={53.99}
          />
          <Product
            key={22}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/N~AAAMXQjwVQ9TvW/s-l225.webp"
            price={79.99}
          />
          <Product
            key={23}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/XpcAAOSw5BtdGoXY/s-l225.webp"
            price={9.99}
          />
          <Product
            key={24}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/jlUAAOSwUwRgGabA/s-l225.webp"
            price={85.0}
          />
          <Product
            key={25}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/3hsAAOSw9hZfc60U/s-l225.webp"
            price={29.99}
          />
          <Product
            key={26}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/0ogAAOSwehZfSMd~/s-l225.webp"
            price={54.99}
          />
          <Product
            key={27}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/Q4kAAOSwACRfSMbj/s-l225.webp"
            price={22.99}
          />
          <Product
            key={28}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <Product
            key={29}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <Product
            key={30}
            rating={3}
            title="stand camera"
            condition={true}
            expiry="july 21"
            src="https://i.ebayimg.com/images/g/F54AAOSwHxNgBXUe/s-l225.webp"
            price={98.99}
          />
          <button
            className="scroll"
            onClick={() => (document.getElementById("2").scrollLeft += 1100)}
          >
            {" "}
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    prop2: state,
  };
};

export default connect(mapStateToProps)(Body);
