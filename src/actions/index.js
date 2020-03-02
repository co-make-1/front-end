import { axiosWithAuth } from "../utils/axiosWithAuth"

export const getData = () => () => {
    axiosWithAuth()
        .get()
        .then(res => {
            console.log(".get", res.data)
        })
        .catch(err => {
            console.log("Error with .get", err)
        })
}