import React, { useEffect } from 'react'
import Clue from './Clue'
import { Button, Card } from 'semantic-ui-react'


function Clues(props) {

    useEffect(() => {
        props.revealClues(props.playerID);
    }, [])
    const colors = ['teal', 'green', 'yellow', 'brown', 'grey', 'brown', 'orange' ]

    return(
        <Card.Group centered>
            {
                props.clues.map((clue, index) => <Clue clue={clue} color={colors[index]} key={index}/>)
            }
        </Card.Group>
    )
}

export default Clues