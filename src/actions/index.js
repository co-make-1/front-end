import { axiosWithAuth } from "../utils/axiosWithAuth"

export const getData = () => dispatch => {
    axiosWithAuth()
        .get()
        .then(res => {
            console.log(".get", res.data)
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