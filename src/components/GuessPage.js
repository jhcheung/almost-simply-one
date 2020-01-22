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
            <Clues clues={props.clues} 
                    revealClues={props.revealClues} 
                    playerID={props.playerID}/>
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