import { combineReducers } from "redux";
import CryptoReducer from './cryptoReducers';

export const combineReducers({
    crypto: CryptoReducer
});