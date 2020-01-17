import React from 'react'


function TurnMessage(props) {
    let message    
    switch(props.stage) {
        case 'draw':
            message = "Please draw a card."
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
        default:
            message = "woops"
    }

    return (
        <div>
            { message }
        </div>
    )
}

export default TurnMessage