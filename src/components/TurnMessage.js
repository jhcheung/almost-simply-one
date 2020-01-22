import React from 'react'
import { Message } from 'semantic-ui-react'


function TurnMessage(props) {
    let message    

    if (props.gameover) {
        return (
            <Message style={{textAlign: 'center'}} error>Game Over</Message>
        )
    }



    switch(props.stage) {
        case 'draw':
            message = "It's your turn! Please draw a card."
            break;
        case 'waiting':
            message = "Waiting for other players..."
            break;
        case 'clue':
            message = "Please give a clue"
            break;
        case 'guess':
            message = "You may guess a clue or pass"
            break;
        // case 'gameover':
        //     message = "The game is over!"
        //     break;
        default:
            message = "woops"
    }


    return (
        <Message style={{textAlign: 'center'}} positive>{message}</Message>
    )
}

export default TurnMessage