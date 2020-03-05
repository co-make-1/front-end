import React, { useState } from "react"
import { connect } from "react-redux"

import { postData } from "../../actions"

const NewIssue = props => {
    const [addIssue, setAddIssue] = useState({
        id: "",
        title: "",
        description: ""
    })

    const handleChange = event => {
        setAddIssue({
            ...addIssue,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.postData({ title: title, description: description });
        props.history.push('/dashboard')
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

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { postData })(NewIssue);