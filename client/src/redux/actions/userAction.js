import {
  
  USER_LOGOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstant";
import axios from "axios";
import { message } from "antd";
import { dispatch } from "react";


export const userLogin = (reqObj) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {reqObj} });

    try {
     
      const response = await axios.post('/api/users/login' , reqObj)

       dispatch({ type: USER_SIGNIN_SUCCESS, payload: response });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      message.success("Login Success");
      setTimeout(()=>{
        window.location.href='/'
      },500);
      } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
      console.log(error);
      message.error("something wrong");
     
    }
  };
  
  export const logout =() =>{
    localStorage.removeItem("userInfo");
    dispatch({type: USER_LOGOUT});
    document.location.href ="/login";
  };

  export const userRegister = (reqObj) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: {reqObj} });
   console.log(reqObj);
    try {        
      const response = await axios.post('/api/users/register' , reqObj)
      console.log(response);
     
      dispatch({ type: USER_REGISTER_SUCCESS, payload: response });
      console.log('hello',response);
      localStorage.setItem("userInfo", JSON.stringify(response));
      message.success("Register Success");
      setTimeout(()=>{
        window.location.href='/login'
      },500);
      } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message, });
      console.log(error);
      message.error("something wrong");
     
    }
  };

