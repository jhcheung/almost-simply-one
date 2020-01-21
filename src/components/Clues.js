import React, { useEffect } from 'react'
import Clue from './Clue'
import { Button, Card } from 'semantic-ui-react'


function Clues(props) {

    useEffect(() => {
        props.revealClues(props.playerID);
    }, [])

    return(
        <Card.Group>
            {
                props.clues.map(clue => <Clue clue={clue} key={clue}/>)
            }
        </Card.Group>
    )
}

export default Clues