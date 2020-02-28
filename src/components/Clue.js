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
    
    // console.log(props.clue, eliminated)

    return(
        <Card color={eliminated ? 'red' : props.color}>
          <Card.Content>
            <Card.Header>{props.clue}</Card.Header>
            {/* <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description> */}
          </Card.Content>
          {
              props.elimination 
              ? 
                <Card.Content extra>
                    {/* <div className='ui two buttons'> */}
                    {/* <Button basic color='green'>
                        Approve
                    </Button> */}
                    {
                      !eliminated 
                      ? <Button onClick={handleClick} negative>
                          Cancel
                        </Button>
                      : <Button onClick={handleClick} positive>
                          Undo
                        </Button>
                    }
                    {/* </div> */}
                </Card.Content>
            : null
          }
        </Card>
    )
}

export default Clue