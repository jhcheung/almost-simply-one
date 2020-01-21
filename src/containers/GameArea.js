import React from 'react'
import DrawCard from '../components/DrawCard'
import CluePage from '../components/CluePage'
import GuessPage from '../components/GuessPage'


function GameArea(props) {
    let renderGameArea

    switch(props.stage) {
        case 'draw':
            renderGameArea = <DrawCard drawCard={props.drawCard} />
            break;
        case 'waiting':
            renderGameArea = null
            break;
        case 'clue':
            renderGameArea = <CluePage 
                                word={props.word}
                                playerID={props.playerID}
                                revealWord={props.revealWord}    
                                giveClue={props.giveClue} />
            break;
        case 'guess':
            renderGameArea = <GuessPage 
                                clues={props.clues}
                                playerID={props.playerID}
                                revealClues={props.revealClues}
                                guessClue={props.guessClue} 
                                passClue={props.passClue} 
                            />
            break;
        default: 
            renderGameArea = "woops"

    }

    return (
        <div>
            { renderGameArea }
        </div>
    )
}

export default GameArea