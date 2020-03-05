import React, { useState } from "react"
import { Button, Form } from "semantic-ui-react"

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
        props.history.push("/dashboard")
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
            <Button color="teal">Update</Button>
        </Form>
    )
}

export default EditIssue;