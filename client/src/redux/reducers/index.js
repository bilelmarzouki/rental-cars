import { combineReducers } from "redux";
import { alertsReducer } from "./alertsReducer";
import { bookingsReducer } from "./bookingsReducer";
import { carsReducer } from "./carsReducer";
import { userRegisterReducer, userSignInReducer } from "./userReducer";

export default combineReducers({
    car :carsReducer,
  alert :alertsReducer,
  userReg : userRegisterReducer,
  userSign : userSignInReducer,
  book : bookingsReducer
})