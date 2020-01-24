import React from 'react'
import DrawCard from '../components/DrawCard'
import CluePage from '../components/CluePage'
import Clues from '../components/Clues'
import { Segment } from 'semantic-ui-react'
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
        case 'waitingGuess':
            renderGameArea = props.clues.length === 0 
                            ? <Segment>
                                Oh no! All Clues have been eliminated!
                            </Segment>
                            :
                            <Clues clues={props.clues} currentPlayer={props.currentPlayer}
            />
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
                                currentPlayer={props.currentPlayer}
                                clues={props.clues}
                                eliminateClue={props.eliminateClue}
                                endElimination={props.endElimination}
                                countdown={props.countdown}
                                countdownNum={props.countdownNum}
                                isCounting={props.isCounting}
                                readdClue={props.readdClue}
                                />
            break;
        case 'guess':
            renderGameArea = <GuessPage 
                                currentPlayerName={props.currentPlayerName}
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