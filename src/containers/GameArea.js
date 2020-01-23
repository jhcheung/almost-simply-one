import React from 'react'
import DrawCard from '../components/DrawCard'
import CluePage from '../components/CluePage'
import GuessPage from '../components/GuessPage'
import EliminationPage from '../components/EliminationPage'


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
        case 'elimination':
            renderGameArea = <EliminationPage 
                                revealClues={props.revealClues}
                                clues={props.clues}
                                eliminateClue={props.eliminateClue}
                                endElimination={props.endElimination}
                                countdown={props.countdown}
                                countdownNum={props.countdownNum}
                                isCounting={props.isCounting}
                                />
            break;
        case 'guess':
            renderGameArea = <GuessPage 
                                currentPlayer={props.currentPlayer}
                                clues={props.clues}
                                playerID={props.playerID}
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