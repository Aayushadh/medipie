import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from "../constants/userConstants";

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, users: [] };

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case USER_DELETE_REQUEST:
      return {
        loading: true,
      };

    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileReducer = (state = { profile: [] }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { loading: true };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: action.payload,
      };
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

