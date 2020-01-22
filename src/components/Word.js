import React from 'react'
import { Card } from 'semantic-ui-react'


function Word(props) {
    
    return(
        <Card centered color='purple'>
          <Card.Content>
            <Card.Header>{props.word}</Card.Header>
            {/* <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description> */}
          </Card.Content>
        </Card>
    )
}

export default Word