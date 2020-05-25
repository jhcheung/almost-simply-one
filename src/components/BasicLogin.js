import React, { useState } from 'react'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'

function BasicLogin(props) {
    const [name, setName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.loginDispatch({ name: name })
        props.onEnterLobby(name)
        setName("")
    }

    const handleChange = (e, { value } ) =>  {
        setName(value)
    }

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size='small' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={name} onChange={handleChange} />
  
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>    
      )
}

export default BasicLogin