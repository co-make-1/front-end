import React from "react"

const Issue = props => {
    console.log("Issue", props)
    return (
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
        </div>
    )
}

export default Issue;