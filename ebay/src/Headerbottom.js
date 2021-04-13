import React from 'react'
import './Headerbottom.css'
function Headerbottom() {
  const getcatgs = () => {
    let catgs = document.getElementsByClassName("bopt");
    var list = [];
   
    Array.from(catgs).forEach((i) => {
      list.push(i.innerHTML)
    })
    

    return list.splice(2, list.length-4);
    
    
  }


    return (
      <div className="headerbottom">
        <div className="headerbottomcontent">
          <a href="ex" className="bopt">
            Home
          </a>
          <a href="ex" className="bopt">
            🖤 Saved
          </a>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Electronics
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Cell Phones & Accessories</a>
                <a href="ex">Smart Watches</a>{" "}
                <a href="ex">Video Games & accessories</a>{" "}
                <a href="ex">Computers & Tablets</a>{" "}
                <a href="ex">Digital Cameras & Photos</a>{" "}
                <a href="ex">Camera Drones</a> <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">iPhone</a>
                <a href="ex">Samsung</a>{" "}
                <a href="ex">Portable Audio & Headphones</a>{" "}
                <a href="ex">Tv,Video & Home Audio</a>{" "}
                <a href="ex">Vehicles Electronics&GPS</a>{" "}
                <a href="ex">Smart Home</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/sfcAAOSwxbFcdx~T/$_57.JPG"
                alt=""
              />
            </div>
          </div>

          <div className="dropdown_">
            <a href="ex" className="bopt">
              Fashion
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Women's Clothing</a>
                <a href="ex">Women's Shoes</a> <a href="ex">Men's Clothing</a>{" "}
                <a href="ex">Men's Shoes</a>{" "}
                <a href="ex">Watches,Parts&Accessories</a>{" "}
                <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Fine Jewelery</a>
                <a href="ex">Fashion Jewelery</a>{" "}
                <a href="ex">Men's Accessories</a>{" "}
                <a href="ex">Women's HandBags & Bags</a>{" "}
                <a href="ex">Kids' Clothing,Shoes&Accs</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/P2EAAOSwTrxfgCng/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Health & Beauty
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Makeup</a>
                <a href="ex">Health Care</a> <a href="ex">Fragrances</a>{" "}
                <a href="ex">Nail Care,Menicure & Pedicure</a>{" "}
                <a href="ex">Hair Care & Styling</a> <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Skin Care</a>
                <a href="ex">Vitamins & Dietary Supplements</a>{" "}
                <a href="ex">Shaving & Hair Removal</a>{" "}
                <a href="ex">Vision Care</a> <a href="ex">Bath & Body</a>
                <a href="ex">Oral Care</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/71MAAOSwkypfgCnz/$_57.JPG"
                alt=""
              />
            </div>
          </div>

          <div className="dropdown_">
            <a href="ex" className="bopt">
              Motors
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Car & Truck Parts</a>
                <a href="ex">Motorcycle Parts</a> <a href="ex">ATV Parts</a>{" "}
                <a href="ex">Scooter Parts</a> <a href="ex">Snowmobile Parts</a>{" "}
                <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Motorcycle Apparel</a>
                <a href="ex">Snowmobile Apparel</a>{" "}
                <a href="ex">Motorcycle Accessories</a>{" "}
                <a href="ex">Performance & Racing Parts</a>{" "}
                <a href="ex">Vintage Car & Truck Parts</a>
                <a href="ex">Car Electronics</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/CeIAAOSwYzBfgCoP/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Collectibles
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Action Figures</a>
                <a href="ex">
                  Coins and Paper Money
                </a> <a href="ex">Stamps</a> <a href="ex">Postcards</a>{" "}
                <a href="ex">Autographed Memorabilia</a>{" "}
                <a href="ex">Sport Memorabilia</a>
                <a href="ex">Collectibles</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Arts</a>
                <a href="ex">Antiques</a>{" "}
                <a href="ex">Pens & Writing Instruments</a>{" "}
                <a href="ex">TV, Movie & Character Toys</a>{" "}
                <a href="ex">Toy Vehicles</a>
                <a href="ex">Comics</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/ZxQAAOSwOOxfgCnI/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Sports
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Cycling</a>
                <a href="ex">Outdoor Sports</a> <a href="ex">Hunting</a>{" "}
                <a href="ex">Fishing</a>{" "}
                <a href="ex">Fitness, Running & Yoga</a> <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Tennis</a>
                <a href="ex">Swimming</a> <a href="ex">Water Sports</a>{" "}
                <a href="ex">Winter Sports</a> <a href="ex">Team Sports</a>
                <a href="ex">Fitness Technology</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/bykAAOSwSPFfgCob/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Home & Garden
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Tools & Workshop Equipment</a>
                <a href="ex">Yard, Garden & Outdoor Living</a>{" "}
                <a href="ex">Home Improvement</a> <a href="ex">Baby</a>{" "}
                <a href="ex">Kitchen, Dining & Bar</a>{" "}
                <a href="ex">Lamps, Lighting & Ceiling Fans</a>
                <a href="ex">Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Home Décor</a>
                <a href="ex">Home Organization Supplies</a>{" "}
                <a href="ex">Art & Craft Supplies</a>{" "}
                <a href="ex">Beads & Jewelry Making Supplies</a>{" "}
                <a href="ex">Art Supplies</a>
                <a href="ex">Scrapbooking & Paper Crafts</a>
                <a href="ex">Pets Supplies</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/msMAAOSw54JfgCoD/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <div className="dropdown_">
            <a href="ex" className="bopt">
              Deals
            </a>
            <div className="dropdown_items">
              <div className="dropleft">
                <h3 className="title">Top Categories</h3>
                <hr></hr>
                <a href="ex">Daily Deals</a>
                <a href="ex">Tech Deals</a> <a href="ex">Fashion Deals</a>{" "}
                <a href="ex">Health and Beauty Deals</a>{" "}
                <a href="ex">Home and Garden Deals</a>{" "}
                <a href="ex">Sporting Goods Deals</a>
              </div>

              <div className="dropright">
                <h3 className="title">Other Categories</h3>
                <hr></hr>
                <a href="ex">Cellphone Deals</a>
                <a href="ex">Camera Deals</a> <a href="ex">Watches Deals</a>{" "}
                <a href="ex">Jewelry Deals</a>{" "}
                <a href="ex">Tech with Free shipping</a>
                <a href="ex">Fashion with Free shipping</a>
                <a href="ex">Hot trends of the week</a>
              </div>
              <img
                className="dropimg"
                src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/KqMAAOSwTd9fgCnU/$_57.JPG"
                alt=""
              />
            </div>
          </div>
          <a href="ex" className="bopt">
            Under $10
          </a>
          <div className='dropdown_2' id='dropdown_2' >
            <span className='bopt' >More </span>
            <div className='dropdown_items2'>
              {document.getElementsByClassName('dropdown_2') ?getcatgs().map((i) => <a href='ex' key={i} >{i}</a>):''}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Headerbottom
