import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Grid } from "semantic-ui-react"
import "./Dashboard.css"

import IssueList from "./IssueList"
import Profile from "./Profile"

const Dashboard = props => {
    return (
        <Grid className="dashboard-wrapper">
            <Grid.Column width={3}>
                <Profile item={props.profileState} />
            </Grid.Column>
            <Grid.Column width={2}>
                <Link to="/new"><Button positive size="large">New Issue</Button></Link>
            </Grid.Column>
            <Grid.Column width={11}>
                <IssueList />
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        profileState: state.userReducer
    }
}

export default connect(mapStateToProps, {})(Dashboard);