import axios from "axios";
import { toast } from "react-toastify";
import {
  URLDevelopment
} from '../../helpers/URL';

//Types
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";

//Initial State
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

//Refucers
export default function auth (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      //Set Token in LocalStorage
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
      //Remove Token in LocalStorage
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}

//Actions
export const register = ({ name, email, password }) => async (dispatch) => {
  //Config header for axios
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Set Body
  const body = JSON.stringify({ name, email, password });

  try {
      //Response
      const res = await axios.post(`${URLDevelopment}/api/user/register`, body, config);

      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      })
  } catch (err) {
      const errors = err.response.data.errors
      if(errors) {
          errors.forEach(errors => toast.error(errors.msg))
      }

      dispatch({
          type: REGISTER_FAIL
      })
  }
};
