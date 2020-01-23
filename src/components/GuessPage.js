import React, { useState } from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
import Clues from './Clues'

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
            {
                props.clues.length === 0 
                ? <Segment>
                    Oh no! All Clues have been eliminated!
                </Segment>
                :  <Clues clues={props.clues} 
                currentPlayer={props.currentPlayer}
                />

            }
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                    <Form.Input 
                            placeholder='guess' 
                            name="guess" 
                            value={guess} 
                            onChange={handleChange} 
                    />
                    </Form.Group>

                    <Button positive type='submit'>Guess</Button>
                    <Button negative onClick={() => props.passClue()}>Pass</Button>

                </Form>

            </Segment>
        </>
    )
}

export default GuessPage