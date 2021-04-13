/** @format */
import { combineReducers } from "redux";

var intialstate = {
  basket:[],
  user:[]
}
var fakestate = [];
var recentlyviewed = [];
export const total = (c) => c?.reduce((a, b) => parseFloat(b.price) + a, 0);
const reducer1 = (state = intialstate, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        basket: [...state.basket, action.payload].filter(
          (v, i, a) => a.findIndex((t) => t.src === v.src) === i
        ),
      };
    case "remove":
      state.basket.splice(
        state.basket.findIndex((i) => i.src === action.payload.src),
        1
      );
      return {
        ...state,
        basket:[...state.basket]
      };
    case 'setuser':
      return {
        ...state,
        user:[action.payload]
      }
    case 'removeuser':
      return {
        ...state,
        user: [],
        basket:[]
      };
    default:
      return state;
  }
};

const reducer2 = (state = fakestate, action) => {
  switch (action.type) {
    case "more":
      state = {
        src: action.payload.src,
        price: action.payload.price,
        title: action.payload.title,
        expiry: action.payload.expiry,
        condition: action.payload.condition,
        rating: action.payload.rating,
      };
      return state;
    default:
      return state;
  }
};

const reducer3 = (state = recentlyviewed, action) => {
  switch (action.type) {
    case "more":
      return [
        ...state,
        {
          src: action.payload.src,
          price: action.payload.price,
          title: action.payload.title,
          expiry: action.payload.expiry,
          condition: action.payload.condition,
          rating: action.payload.rating,
        },
      ];
    default:
      return state;
  }
};

const reducer = combineReducers({
  reducer1,
  reducer2,
  reducer3,
});

export default reducer;
