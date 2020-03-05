const userState = {
    id: "",
    name: "Joe Smith",
    email: "joe@email.com",
    bio: "I'm just an upstanding citizen of the beautiful Northtown community."
    // votes: ""
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default userReducer;