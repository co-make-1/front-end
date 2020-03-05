import React from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "semantic-ui-react"

const Profile = props => {
    console.log("Profile", props)
    return (
        <Card className="profile-container">
            <Card.Description>User Profile</Card.Description>
            {/* 
            Profile image? (stretch)
            Name/Username
            Email
            Bio
            */}
            <Card.Header>{props.item.name}</Card.Header>
            <Card.Description>{props.item.email}</Card.Description>
            <Card.Description>{props.item.bio}</Card.Description>
            <Link><Button color="teal">Edit Profile</Button></Link>
        </Card>
    )
}

/* const mapStateToProps = state => {
    return {
        profileState: state.userReducer
    }
} */

export default Profile;