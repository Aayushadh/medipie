import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LIST_REQUEST: (state) => {
      state.loading = true;
    },
    USER_LIST_SUCCESS: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    USER_LIST_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    USER_DELETE_REQUEST: (state) => {
      state.loading = true;
      state.users = state.users;
    },
    USER_DELETE_SUCCESS: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    USER_DELETE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
} = userSlice.actions;

export const listUsers = () => async (dispatch) => {
  try {
    dispatch(USER_LIST_REQUEST());
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch(USER_LIST_SUCCESS(data));
  } catch (error) {
    dispatch(USER_LIST_FAIL(error));
  }
};

export const deleteUserAction = (id, userList) => async (dispatch) => {
  try {
    dispatch(USER_DELETE_REQUEST());
    const data = userList.filter((ele) => ele.id !== id);
    dispatch(USER_DELETE_SUCCESS(data));
  } catch (error) {
    dispatch(USER_DELETE_FAIL(error));
  }
};
export const selectUserList = (state) => state.userList.users;
export const selectUserLoading = (state) => state.userList.loading;
export const selectUserError = (state) => state.userList.error;

export default userSlice.reducer;
