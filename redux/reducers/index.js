import { combineReducers } from "redux";

import coffeeshops from "./coffeeshops";
import cart from "./cart";
import user from "./user";
import errors from "./errors";

export default combineReducers({ coffeeshops, cart, user, errors });
