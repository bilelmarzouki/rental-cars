import {
   
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL,
    USER_LOGOUT

  } from "../constants/userConstant";
  const userSign ={
    usersin :[ ]
    };
  
  export const userSignInReducer = (state =userSign , action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
        };
      case USER_SIGNIN_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        case USER_LOGOUT:
            return{};
      default:
        return state;
    }
  };

  const userReg ={
    userRe :[ ]
    };
  export const userRegisterReducer = (state = userReg, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return {
          loading: false,
          userInfo: action.payload,
        };
      case USER_REGISTER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  