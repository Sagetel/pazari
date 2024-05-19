import { SET_USER } from "../../utilities/types";

export function user(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}