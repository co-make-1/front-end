import React, { useEffect } from "react"
import { connect } from "react-redux";

import Issue from "./Issue"

const IssueList = props => {

    useEffect(() => {
        console.log("Props", props)
    })
    return (
        <>
            {/* Map props to Issue? */}
            <h1>{props.issueId}</h1>
            <Issue />
        </>
    )
}

const mapStateToProps = state => {
    return {
        issueId: state.issueReducer.id,
    }
}

export default connect(mapStateToProps, {})(IssueList);