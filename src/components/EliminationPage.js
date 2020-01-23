import React, { useEffect } from 'react'
// import useInterval from '@use-it/interval';
import Clues from './Clues'
import 'react-circular-progressbar/dist/styles.css';
import { Button, Segment } from 'semantic-ui-react';


function EliminationPage({ clues, currentPlayer, eliminateClue, revealClues, readdClue, endElimination}) {

    useEffect(() => {
        revealClues()
    }, [revealClues])

    return(
        <>
            <Clues 
                readdClue={readdClue}
                elimination={true} 
                clues={clues} 
                currentPlayer={currentPlayer} 
                eliminateClue={eliminateClue}/>
            <Segment>
                <Button secondary onClick={() => endElimination()}>Skip Timer</Button>
            </Segment>
        </>
    )
}

export default EliminationPage