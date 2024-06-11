import { SET_USER, SET_ADS } from "../../utilities/types";

export function user(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ADS:
      return { ...state, ads: action.payload };
    default:
      return state;
  }
}