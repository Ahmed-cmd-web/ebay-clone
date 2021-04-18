import React from 'react'
import './Bottom.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
function Bottom() {
    return (
      <div className="Bottom">
        <hr style={{color:'gainsboro'}}></hr>
        <div className="Bottomcon">
          <div className="column">
            <a href="ex">
              <h3 className="title">Buy</h3>
            </a>{" "}
            <a href="ex">
              <span>Registration</span>
            </a>{" "}
            <a href="ex">
              <span>eBay Money Back Guarantee</span>
            </a>{" "}
            <a href="ex">
              <span>Bidding & buying help</span>
            </a>{" "}
            <a href="ex">
              <span>Stores</span>
            </a>
            <a href="ex">
              <span>eBay Local</span>
            </a>
            <a href="ex">
              <span>eBay guides</span>
            </a>
          </div>
          <div className="column">
            <div className="part1">
              <a href="ex">
                <h3 className="title">Sell</h3>
              </a>{" "}
              <a href="ex">
                <span>Start selling</span>
              </a>{" "}
              <a href="ex">
                <span>Learn to sell</span>
              </a>{" "}
              <a href="ex">
                <span>Business sellers</span>
              </a>{" "}
              <a href="ex">
                <span>Affiliates</span>
              </a>{" "}
            </div>
            <div className="part2">
              <h3 className="title">Tools & apps</h3>
              <a href="ex">
                <span>Developers</span>
              </a>{" "}
              <a href="ex">
                <span>Security center</span>
              </a>{" "}
              <a href="ex">
                <span>eBay official time</span>
              </a>{" "}
              <a href="ex">
                <span>Site map</span>
              </a>{" "}
            </div>
          </div>
          <div className="column">
            <div className="part1">
              <h3 className="title">eBay companies</h3>
              <a href="ex">
                <span>eBay Classifieds</span>
              </a>{" "}
              <a href="ex">
                <span>Close5</span>
              </a>{" "}
              <a href="ex">
                <span>See all companies</span>
              </a>{" "}
            </div>
            <div className="part2">
              <h3 className="title">Stay connected</h3>
              <a href="ex">
                <span>eBay's Blogs</span>
              </a>{" "}
              <a href="ex">
                <span>
                  {" "}
                  <FacebookIcon className="icon" /> Facebook
                </span>
              </a>{" "}
              <a href="ex">
                <span>
                  {" "}
                  <TwitterIcon className="icon" />
                  Twitter
                </span>
              </a>{" "}
            </div>
          </div>
          <div className="column">
            <a href="ex">
              <h3 className="title">About eBay</h3>
            </a>{" "}
            <a href="ex">
              <span>Company info</span>
            </a>{" "}
            <a href="ex">
              <span>News</span>
            </a>{" "}
            <a href="ex">
              <span>Investors</span>
            </a>{" "}
            <a href="ex">
              <span>Careers</span>
            </a>
            <a href="ex">
              <span>Government relations</span>
            </a>
            <a href="ex">
              <span>Advertise with us</span>
            </a>
            <a href="ex">
              <span>Policies</span>
            </a>
            <a href="ex">
              <span>Verified Rights Owner (VeRO) Program</span>
            </a>
          </div>
          <div className="column">
            <div className="part1">
              <a href="ex">
                <h3 className="title">Help & Contact</h3>
              </a>{" "}
              <a href="ex">
                <span>Resolution Center</span>
              </a>{" "}
              <a href="ex">
                <span>Seller Information Center</span>
              </a>{" "}
              <a href="ex">
                <span>Contact us</span>
              </a>{" "}
            </div>
            <div className="part2">
              <a href="ex">
                <h3 className="title">Community</h3>
              </a>{" "}
              <a href="ex">
                <span>Announcements</span>
              </a>{" "}
              <a href="ex">
                <span>Answer center</span>
              </a>{" "}
              <a href="ex">
                <span>Discussion boards</span>
              </a>{" "}
              <a href="ex">
                <span>eBay Giving Works</span>
              </a>{" "}
              <a href="ex">
                <span>Groups</span>
              </a>{" "}
              <a href="ex">
                <span>eBay top shared</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Bottom
