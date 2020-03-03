import React from "react"
import { connect } from "react-redux";

import Issue from "./Issue"

const IssueList = () => {
    return (
        <>
            {/* Map props to Issue? */}
            <Issue />
        </>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default connect(mapStateToProps, {})(IssueList);