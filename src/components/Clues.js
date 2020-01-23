import React from 'react'
import Clue from './Clue'
import { Card } from 'semantic-ui-react'


function Clues(props) {

    const colors = ['teal', 'green', 'yellow', 'brown', 'grey', 'brown', 'orange' ]

    return(
        <Card.Group centered>
            {
                props.clues.map((clue, index) => <Clue eliminateClue={props.eliminateClue} 
                elimination={props.elimination} clue={clue} color={colors[props.currentPlayer]} key={index}/>)
            }
        </Card.Group>
    )
}

export default Clues