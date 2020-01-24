import React from 'react'
import { Form, Button, Header, Segment } from 'semantic-ui-react'
import useFormFields from '../hooks/useFormFields'

function CreateGame(props) {

    const [fields, handleFieldChange, resetField] = useFormFields({
        // roomName: "",
        numPlayers: ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (fields.numPlayers) {
          props.onCreateRoom(props.gameName, fields.numPlayers)
        }
      // resetField("roomName")
        resetField("numPlayers")
    }

    return(
      <Segment>

              <Header>Create Game</Header>
            <Form onSubmit={handleSubmit}>
                {/* <Form.Group widths='equal'>
                <Form.Input 
                        fluid label='Room name' 
                        placeholder='Room name' 
                        name="roomName" 
                        value={fields.roomName} 
                        onChange={handleFieldChange} 
                />
                </Form.Group> */}
            <Form.Group inline>
              <label>Number of Players</label>

              <Form.Radio
                name='numPlayers'
                label='3'
                value='3'
                checked={fields.numPlayers === '3'}
                onChange={handleFieldChange}
              />

              <Form.Radio
                name='numPlayers'
                label='4'
                value='4'
                checked={fields.numPlayers === '4'}
                onChange={handleFieldChange}
              />
              <Form.Radio
                name='numPlayers'
                label='5'
                value='5'
                checked={fields.numPlayers === '5'}
                onChange={handleFieldChange}
              />
              <Form.Radio
                name='numPlayers'
                label='6'
                value='6'
                checked={fields.numPlayers === '6'}
                onChange={handleFieldChange}
              />
            <Form.Radio
                name='numPlayers'
                label='7'
                value='7'
                checked={fields.numPlayers === '7'}
                onChange={handleFieldChange}
              />

            </Form.Group>



                <Button type='submit'>Submit</Button>
            </Form>
                </Segment>
    )
}

export default CreateGame