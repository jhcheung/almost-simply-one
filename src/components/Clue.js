import React from 'react'
import { Button, Card } from 'semantic-ui-react'


function Clue(props) {
    
    return(
        <Card color={props.color}>
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
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
                </Card.Content>
            : null
          }
        </Card>
    )
}

export default Clue