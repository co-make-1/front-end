import React from "react"

const Profile = props => {
    console.log("Profile", props)
    return (
        <div className="main-container">
            <h1>Profile Render</h1>
            {/* 
            Profile image? (stretch)
            Name/Username
            Email
            Bio
            */}
            <p>{props.item.name}</p>
            <p>{props.item.email}</p>
            <p>{props.item.bio}</p>
        </div>
    )
}

{/* const mapStateToProps = state => {
    return {
        profileState: state.userReducer
    }
} */}

export default Profile;