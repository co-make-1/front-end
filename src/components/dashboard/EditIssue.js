import React, { useState } from "react"

const EditIssue = props => {
    const [editIssue, setEditIssue] = useState({
        id: 0,
        name: "",
        email: "",
        bio: ""
    })

    const handleChange = event => {
        setEditIssue({
            ...editIssue,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form
            className="new-issue-form"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor="title"
            >What is the issue?</label>
            <input
                id="title"
                name="title"
                type="text"
                value={props.title}
                onChange={handleChange}
            />
            <label
                htmlFor="description"
            >Describe the issue: </label>
            <input
                id="description"
                name="description"
                type="text"
                value={props.description}
                onChange={handleChange}
            />
            <button>Create</button>
        </form>
    )
}

export default EditIssue;