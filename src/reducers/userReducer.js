const userState = {
    id: "",
    name: "Joe",
    email: "joe@email.com",
    bio: "I'm Joe"
    // votes: ""
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;