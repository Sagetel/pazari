import { getAllEbols, getEbolById } from './api.js';

import { GET_EBOLS, SET_NOTIFICATION, SET_USER } from "./types";

export async function setUser(dispatch, jwt) {
  dispatch({
    type: SET_USER,
    payload: jwt
  })
}