import React, { useEffect } from "react"
import { connect } from "react-redux";
import { Container } from "semantic-ui-react"

import Issue from "./Issue"

const IssueList = props => {

    useEffect(() => {
        console.log("IssueList", props)
    })
    return (
        <Container text>
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