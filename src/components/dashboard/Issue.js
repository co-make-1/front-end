import React from "react"

import { Link } from "react-router-dom"
import Vote from "./Vote"

const Issue = props => {
    console.log("Issue", props)
    return (
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
            <Vote />
            {/* Edit button -> launches EditIssue? */}
            <Link to="/edit"><button>Edit</button></Link>
        </div>
    )
}

export default Issue;