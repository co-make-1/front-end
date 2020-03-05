import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Button } from "semantic-ui-react"

import IssueList from "./IssueList"
import Profile from "./Profile"

const Dashboard = props => {
    return (
        <Container fluid>
            <Profile item={props.profileState} />
            <Link to="/new"><Button positive size="large">New Issue</Button></Link>
            <IssueList />
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        profileState: state.userReducer
    }
}

export default connect(mapStateToProps, {})(Dashboard);