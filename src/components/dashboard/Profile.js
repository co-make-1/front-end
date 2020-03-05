import React from "react"
import { Link } from "react-router-dom"
import { Card, Button } from "semantic-ui-react"

const Profile = props => {
    console.log("Profile", props)
    return (
        <Card className="main-container">
            <Card.Meta>User Profile</Card.Meta>
            {/* 
            Profile image? (stretch)
            Name/Username
            Email
            Bio
            */}
            <Card.Header>{props.item.name}</Card.Header>
            <Card.Meta>{props.item.email}</Card.Meta>
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