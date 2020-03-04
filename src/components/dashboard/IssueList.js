import React, { useEffect } from "react"
import { connect } from "react-redux";

import Issue from "./Issue"

const IssueList = props => {

    useEffect(() => {
        console.log("Props", props)
    })
    return (
        <div className="issue-list-container">
            {/* Map props to Issue? */}
            <h1>{props.issueId}</h1>
            {/* {props.map((item) => {
                <Issue item={issueId} />
            })} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        issueId: state.issueReducer.id,
        issueTitle: state.issueReducer.title,
        issueDescription: state.issueReducer.description
    }
}

export default connect(mapStateToProps, {})(IssueList);