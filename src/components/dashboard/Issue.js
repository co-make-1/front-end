import React from "react"
import {
    Item,
    Button,
    Header,
    Divider, Grid
} from "semantic-ui-react"
import { Link } from "react-router-dom"
import Vote from "./Vote"

const Issue = props => {
    console.log("Issue", props)
    return (
        <Grid>
            <Grid.Column width={4}>
                <Vote />
            </Grid.Column>
            <Grid.Column width={9}>
                <Item.Header><Header size="large">{props.item.title}</Header></Item.Header>
                {/* <Item.Meta>Description of Issue:</Item.Meta> */}
                <Item.Description>{props.item.description}</Item.Description>
            </Grid.Column>
            <Grid.Column width={3}>
                <Button.Group size="medium" floated="right">
                    <Link to="/edit"><Button color="teal">Edit</Button></Link>
                    <Button.Or />
                    <Button negative>Delete</Button>
                </Button.Group>
            </Grid.Column>
        </Grid>
    )
}

export default Issue;