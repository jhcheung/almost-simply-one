import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

function BasicLogin(props) {
    const [name, setName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        // resetField("roomName")
        props.loginDispatch({ name: name })
        setName("")
    }

    const handleChange = (e, { value } ) =>  {
        setName(value)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
            <Form.Input 
                    fluid label='name' 
                    placeholder='name' 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
            />
            </Form.Group>

            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default BasicLogin