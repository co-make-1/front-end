import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import IssueList from "./IssueList"
import Profile from "./Profile"
import NewIssue from "./NewIssue"

const Dashboard = props => {
    return (
        <div>
            <Profile item={props.profileState} />
            <Link to="/new"><button>New Issue</button></Link>
            <IssueList />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        profileState: state.userReducer
    }
}

export default connect(mapStateToProps, {})(Dashboard);