import { FETCH_DATA, UPDATE_ISSUE } from "../actions"

const issueState = [{
    id: 5,
    title: "Potholes on Northview Street?",
    description: "There are so MANY potholes on northview. I feel like I'm offroading in my honda civic. The city should do something about this!"
}]

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