import React, { useEffect } from "react"
import { connect } from "react-redux";
import { Container } from "semantic-ui-react"

import Issue from "./Issue"
import { axiosWithAuth } from "../../utils/axiosWithAuth"

const IssueList = props => {
    console.log("IssueList", props)


    return (
        <Container text>
            <h2>Current Issues</h2>
            {props.issueState.map(item => {
                return (<Issue key={item.id} item={item} />)
            })}
        </Container>
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