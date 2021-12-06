import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  profile: [],
  loading: false,
  errors: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    USER_PROFILE_REQUEST: (state) => {
      state.loading = true;
    },
    USER_PROFILE_SUCCESS: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    USER_PROFILE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} = userProfileSlice.actions;

export const getUserProfile = (id) => async (dispatch) => {
    try {
        dispatch(USER_PROFILE_REQUEST())
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        dispatch(USER_PROFILE_SUCCESS(data))
    } catch (error) {
        dispatch(USER_PROFILE_FAIL())
    }
}

export const selectUserProfile = (state) => state.userProfile;

export default userProfileSlice.reducer;
