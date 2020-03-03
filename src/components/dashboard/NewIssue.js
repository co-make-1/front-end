import React from "react"

const NewIssue = () => {

    // const handleChange = event => {

    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    // }

    return (
        <form
            className="new-issue-form"
        // onSubmit={handleSubmit}
        >
            <label
                htmlFor="title"
            >What is the issue?</label>
            <input
                id="title"
                name="title"
                type="text"
            // value={}
            // onChange={handleChange}
            />
            <label
                htmlFor="description"
            >Describe the issue: </label>
            <input
                id="description"
                name="description"
                type="text"
            // value={}
            // onChange={handleChange}
            />
            <button>Create</button>
        </form>
    )
}

export default NewIssue;