import React, { useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import TurnMessage from '../components/TurnMessage'
import GameArea from '../containers/GameArea'
import EndGameModal from '../components/EndGameModal'
import ScoreScreen from '../components/ScoreScreen'
import PlayerNames from '../components/PlayerNames'


function Board(props) {

    // console.log(props)
    // console.log("active player", props.ctx.activePlayers)
    // if (props.ctx.gameover) {
    //     return (
    //     );
    //   }



    const playerNames = props.gameMetadata.map(player => player.name)
    console.log(props)
    console.log(playerNames)

    const stage = props.ctx.activePlayers ? props.ctx.activePlayers[props.playerID] : "gameover"
    return(
        <>
            { 
                props.ctx.gameover 
                    ?   <>
                            <EndGameModal gameover={props.ctx.gameover} />
                            <ScoreScreen gameover={props.ctx.gameover} playerNames={playerNames}/>
                        </>
                    :  
                    <>
                        <div>{props.G.points}</div>
                        <PlayerNames currentPlayer={props.ctx.currentPlayer} playerNames={playerNames} />
                        <TurnMessage stage={stage} />
                        <GameArea 
                                    playerID={props.playerID}
                                    stage={stage}
                                    word={props.G.players[props.playerID].word}
                                    revealWord={props.moves.revealWord}
                                    revealClues={props.moves.revealClues}
                                    clues={props.G.players[props.playerID].clues}
                                    drawCard={props.moves.drawCard}
                                    giveClue={props.moves.giveClue}
                                    guessClue={props.moves.guessClue}
                                    passClue={props.moves.passClue}
                                />
                    </>
            }
            

            {/* <div>{props.G.word}</div> */}
    
            



        </>
    )
}

export default Board