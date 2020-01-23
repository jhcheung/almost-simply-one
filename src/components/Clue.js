import React, { useState } from 'react'
import { Button, Card } from 'semantic-ui-react'


function Clue(props) {

    const [ eliminated, setEliminated ] = useState(false)

    const handleClick = () => {
      props.eliminateClue(props.clue)
      setEliminated(true)
    }
    
    return(
        <Card className={eliminated ? 'inverted' : ""} color={props.color}>
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
                    <Button onClick={handleClick} basic color='red'>
                        Cancel
                    </Button>
                    {/* </div> */}
                </Card.Content>
            : null
          }
        </Card>
    )
}

export default Clue