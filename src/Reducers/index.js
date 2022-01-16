import { combineReducers } from "redux";
import CryptoReducer from './cryptoReducers';

export default combineReducers({
    crypto: CryptoReducer
});