import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'


function Clue(props) {

    const [ eliminated, setEliminated ] = useState(false)

    const handleClick = () => {
      if (!eliminated) {
        setEliminated(true)
        props.eliminateClue(props.clue)
      } else {
        setEliminated(false)
        props.readdClue(props.clue)
      }
    }
    

    return(
        <Card color={eliminated ? 'red' : props.color}>
          <Card.Content>
            <Card.Header>{props.clue}</Card.Header>
          </Card.Content>
          {
              props.elimination 
              ? 
                <Card.Content extra>
                    {
                      !eliminated 
                      ? <Button onClick={handleClick} negative>
                          Cancel
                        </Button>
                      : <Button onClick={handleClick} positive>
                          Undo
                        </Button>
                    }
                </Card.Content>
            : null
          }
        </Card>
    )
}

export default Clue