import { createAction } from 'redux-actions';
import axios from 'axios';
import issueConstants from '../constants/issueConstants.js';

export const logoutMe = createAction(issueConstants.LOGOUT);
export const submitFB = createAction(issueConstants.SUBMIT_FEEDBACK);
export const getProduct = createAction(issueConstants.PRODUCT_DETAILS);
export const getPurchasedItems = createAction(issueConstants.PURCHASED_ITEMS);
export const getFeedback = createAction(issueConstants.FEEDBACK_DETAILS);

export function loginAction(data) {
  return dispatch => {
    axios.get('http://localhost:4000/users')
      .then((res) => {
        let value = res.data
        var result = value.find(val => val.username === data.username && val.password === data.password)
        if (result) {
          dispatch(loginMe(true, result.username))
        }
        else {
          dispatch(loginMe(false))
        }
      })
  }
}

export function loginMe(isAuthenticated, username) {
  return {
    type: 'LOGIN',
    isAuthenticated: isAuthenticated,
    user: username
  }
}

// LOGOUT ACTION
export function logout() {
  return (dispatch) => {
    dispatch(logoutMe())
  }
}

// GET PRODUCT LIST
export function getPurchasedProductList() {
  return (dispatch) => {
    axios.get('http://localhost:4000/products')
      .then((response) => dispatch(getPurchasedItems({productList: response.data})))
      .catch(err => console.log(err))
  }
}

// SUBMIT_FEEDBACK
export function submitFeedback(data) {
  return dispatch => {
    axios(`http://localhost:4000/feedbackDetails`, {
      method: 'POST',
      crossdomain: true,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(submitFB(res.data))
      })
      .catch(err => dispatch(submitFB(err)))
  }
}

// PRODUCT_DETAILS
export function getProductDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/products/${pdtId}`)
      .then((res) => { dispatch(getProduct({productDetail: res.data})) })
      .catch(err => dispatch(getProduct(err)))
  }
}

export function getFeedbackDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/feedbackDetails?pdtCode=${pdtId}`)
      .then((res) => { dispatch(getFeedback(res.data)) })
      .catch(err => dispatch(getFeedback(err)))
  }
}
