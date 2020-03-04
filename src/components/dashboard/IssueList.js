import React, { useEffect } from "react"
import { connect } from "react-redux";

import Issue from "./Issue"

const IssueList = props => {

    useEffect(() => {
        console.log("IssueList", props)
    })
    return (
        <div className="issue-list-container">
            {props.issueState.map(item => {
                return (<Issue item={item} />)
            })}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        issueState: state.issueReducer
        // issueTitle: state.issueReducer.title,
        // issueDescription: state.issueReducer.description
    }
}

export default connect(mapStateToProps, {})(IssueList);