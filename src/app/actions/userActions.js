import axios from 'axios'
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from '../constants/userConstants'

export const listUsers = () => async (
    dispatch
) => {
    try {

        dispatch({ type: USER_LIST_REQUEST })
        const { data } = await axios.get(
            `http://jsonplaceholder.typicode.com/users`
        )
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.message,
        })
    }
}

export const getUserProfile = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload: error.message,
        })
    }
}
