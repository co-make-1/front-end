import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ISSUE = "UPDATE_ISSUE";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axiosWithAuth()
        .get()
        .then(res => {
            console.log(".get", res.data);
            dispatch({ type: UPDATE_ISSUE, payload: res.data })
        })
        .catch(err => {
            console.log("Error with .get", err)
        })
}

export const postData = () => dispatch => (
    axiosWithAuth()
        .post()
        .then(res => {
            console.log(".post", res)
        })
        .catch(err => {
            console.log("Error with .post", err)
        })
)