import { getAllEbols, getEbolById } from './api.js';

import { SET_USER, SET_ADS } from "./types";

export async function setUser(dispatch, jwt) {
  dispatch({
    type: SET_USER,
    payload: jwt
  })
}
export async function setAds(dispatch, ads) {
  dispatch({
    type: SET_ADS,
    payload: ads
  })
}