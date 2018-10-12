import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => (dispatch) => {
  return (SessionApiUtil.ajaxSignup(user)
    .then((user) => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};

export const login = (user) => (dispatch) => {
  return (SessionApiUtil.ajaxLogin(user)
    .then((user) => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};

export const logout = (user) => (dispatch) => {
  return (SessionApiUtil.ajaxLogout(user)
    .then((user) => (
      dispatch(logoutCurrentUser(user))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};
