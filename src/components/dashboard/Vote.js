import React from "react";
import { Container, Button, Header, Icon } from "semantic-ui-react"

class Vote extends React.Component {
    state = { vote: 0, score: 0 }
    vote(type) {
        this.setState(state => ({
            vote: state.vote === type ? 0 : type
        }))
    }
    render() {
        const { vote, score } = this.state
        return (
            <Container>
                <Header sub>{score + vote}</Header>
                <Button.Group>
                    <Button icon className={vote === 1 ? "active" : undefined} onClick={() => this.vote(1)}>
                        <Icon name="arrow up" />
                    </Button>
                    <Button icon className={vote === -1 ? "active" : undefined} onClick={() => this.vote(-1)}>
                        <Icon name="arrow down" />
                    </Button>
                </Button.Group>
            </Container>
        )
    }
}

// const Vote = () => {
//     const [vote, setScore] = useState({
//         vote: 0,
//         setScore: 0
//     })

//     const handleClick = (setScore) => {
//         vote: setScore === type ? 0 : type
//     }

//     return (
//         <div>
//             <button className={vote === 1 ? "active" : undefined} onClick={() => vote(1)}>
//                 Upvote
//                 </button>
//             <button className={vote === -1 ? "active" : undefined} onClick={() => vote(-1)}>
//                 Downvote
//                 </button>
//         </div>
//     )
// }

export default Vote;