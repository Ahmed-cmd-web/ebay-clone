/** @format */

import { AiOutlineBell } from "react-icons/ai";

const drpcontent = [
  "Summary",
  "Recently Viewed",
  " Bids/Offers",
  " Watchlist",
  " Purchase History",
  "Buy Again",
  "Selling",
  "Saved Searches",
  "Saved Sellers",
  "Messages",
];
const listitems = [
  {
    name: "ship to",
    expands: false,
    hasicon: false,
  },
  {
    name: "sell",
    expands: false,
    hasicon: false,
  },
  {
    name: "Watchlist",
    expands: false,
    hasicon: false,
  },
  {
    name: "My ebay",
    expands: true,
    items: drpcontent,
    hasicon: false,
  },
  {
    name: "notifications",
    icon: <AiOutlineBell size={25} className="bell" />,
    expands: false,
    hasicon: true,
  }
];
const content={ drpcontent, listitems }
export default content ;
