import React from "react"
import {
    Item,
    Button,
    Header,
    Divider, Grid
} from "semantic-ui-react"
import { Link } from "react-router-dom"
import Vote from "./Vote"
import { grey100 } from "material-ui/styles/colors"

const Issue = props => {
    console.log("Issue", props)

    // const deleteIssue = () => {
    //     axiosWithAuth()
    //         .delete()
    //         .then
    // }

    return (
        <Grid className="issue-wrapper">
            <Grid.Column width={3}>
                <Vote />
            </Grid.Column>
            <Grid.Column width={10}>
                <Item.Header><Header size="large">{props.item.title}</Header></Item.Header>
                {/* <Item.Meta>Description of Issue:</Item.Meta> */}
                <Item.Description>{props.item.desc}</Item.Description>
            </Grid.Column>
            <Grid.Column width={3}>
                <Button.Group size="medium" floated="right" vertical>
                    <Link to="/edit"><Button color="teal">Edit</Button></Link>
                    <Button color="red">Delete</Button>
                </Button.Group>
            </Grid.Column>
        </Grid>
    )
}

export default Issue;