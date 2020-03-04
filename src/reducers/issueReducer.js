import { FETCH_DATA, UPDATE_ISSUE } from "../actions"

const issueState = {
    id: "",
    title: "",
    description: ""
}

const issueReducer = (state = issueState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state
            }
        case UPDATE_ISSUE:
            return {
                ...state,
                title: action.payload,
                description: action.payload
            }

        default:
            return state;
    }
}

export default issueReducer;