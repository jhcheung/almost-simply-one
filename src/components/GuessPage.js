import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

function GuessPage(props) {

    const [guess, setGuess] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (guess) {
          props.guessClue(guess)
        }
    }

    const handleChange = (e, {value}) => {
        setGuess(value)
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input 
                        fluid label='guess' 
                        placeholder='guess' 
                        name="guess" 
                        value={guess} 
                        onChange={handleChange} 
                />
                </Form.Group>

                <Button type='submit'>Guess</Button>
            </Form>

            <Button onClick={() => props.passClue()}>Pass</Button>
        </>
    )
}

export default GuessPage