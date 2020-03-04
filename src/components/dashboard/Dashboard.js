import React from "react"
import { connect } from "react-redux"

import IssueList from "./IssueList"
import Profile from "./Profile"

const Dashboard = props => {
    return (
        <div>
            <Profile item={props.profileState} />
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