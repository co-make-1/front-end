import React, { useState } from "react"
import { connect } from "react-redux"
import { Button, Form } from "semantic-ui-react"

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
        // props.postData({ title: title, description: description });
        props.history.push('/dashboard')
    }

    return (
        <Form
            className="new-issue-form"
            onSubmit={handleSubmit}
        >
            <Form.Field>
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
            </Form.Field>
            <Form.Field>
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
            </Form.Field>
            <Button>Create</Button>
        </Form>
    )
}



export default NewIssue;