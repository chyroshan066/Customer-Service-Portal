import issueConstants from './../constants/issueConstants';
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const initState = {
  user: '',
  feedbackDetail: [],
  productList: [],
  productDetail: {},
  isAuthed: false
}

const login = (state=initState, action) => {
  switch (action.type) {
    
    case issueConstants.LOGIN:
      return {
        ...state,
        isAuthed: action.isAuthenticated,
        user: action.user
      }
      case issueConstants.LOGOUT: 
      return {
        ...state,
        ...initState,
      }
    default:
      return state;
  }
}

const productDetail = (state = initState, action) => {
  switch (action.type) {

    case issueConstants.PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const feedbackDetail = (state = initState, action) => {
  
  switch (action.type) {
    case issueConstants.FEEDBACK_DETAILS:
      return {
        ...state,
        feedbackDetail: action.payload
      }
    case issueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        feedbackDetail: [...state.feedbackDetail, action.payload]
      }
    default:
      return state;
  }
}

const submitFeedback = (state = initState, action) => {
  switch (action.type) {

    case issueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

// const productList = (state = initState, action) => {
//   switch (action.type) {

//     case issueConstants.PURCHASED_ITEMS:
//       return {
//         ...state,
//         ...action.payload
//       }
//     default:
//       return state;
//   }
// };

const productList = handleAction(
  issueConstants.PURCHASED_ITEMS,
  (state, action) => ({
    ...state,
    ...action.payload
  }),
  initState
);

export const getLoginState = state => state.login;
export const getProductState = state => state.productDetail.productDetail;
export const getFeedbackDetailsState = state => state.feedbackDetail.feedbackDetail;
export const getFeedbackState = state => state.submitFeedback;
export const getProductList = state => state.productList.productList;

export default combineReducers({
  login,
  productDetail,
  feedbackDetail,
  submitFeedback,
  productList
});
