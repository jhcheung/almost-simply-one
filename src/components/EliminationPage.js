import React, { useEffect } from 'react'
// import useInterval from '@use-it/interval';
import Clues from './Clues'
import 'react-circular-progressbar/dist/styles.css';
// import { Segment } from 'semantic-ui-react';


function EliminationPage({ clues, currentPlayer, eliminateClue, revealClues}) {

    useEffect(() => {
        revealClues()
    }, [revealClues])

    return(
        <Clues elimination={true} 
                clues={clues} 
                currentPlayer={currentPlayer} 
                eliminateClue={eliminateClue}/>
    )
}

export default EliminationPage