import React, { useState } from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
import Word from './Word'


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
        <>
            <Word word={props.word} />
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Input 
                            fluid 
                            placeholder='clue' 
                            name="clue" 
                            value={clue} 
                            onChange={handleChange} 
                    />
                    </Form.Group>

                    <Button primary type='submit'>Add Clue</Button>
                </Form>
            </Segment>
        </>
    )
}

export default CluePage