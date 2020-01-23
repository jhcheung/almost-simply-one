import React, { useState } from 'react'
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react'

function BasicLogin(props) {
    const [name, setName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        // resetField("roomName")
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
          {/* <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> 
            Almost Simply One
          </Header> */}
          <Form size='small' onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={name} onChange={handleChange} />
              {/* <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              /> */}
  
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          {/* <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message> */}
        </Grid.Column>
      </Grid>    
  


        // <Form onSubmit={handleSubmit}>
        //     <Form.Group widths='equal'>
        //     <Form.Input 
        //             fluid label='name' 
        //             placeholder='name' 
        //             name="name" 
        //             value={name} 
        //             onChange={handleChange} 
        //     />
        //     </Form.Group>

        //     <Button type='submit'>Submit</Button>
        // </Form>
    )
}

export default BasicLogin