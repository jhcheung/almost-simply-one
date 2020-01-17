import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

function CluePage(props) {

    const [clue, setClue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (clue) {
          props.giveClue(clue)
        }
    }

    const handleChange = (e, {value}) => {
        setClue(value)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
            <Form.Input 
                    fluid label='clue' 
                    placeholder='clue' 
                    name="clue" 
                    value={clue} 
                    onChange={handleChange} 
            />
            </Form.Group>

            <Button type='submit'>Add Clue</Button>
        </Form>
    )
}

export default CluePage