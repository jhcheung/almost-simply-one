import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { Button, Grid } from 'semantic-ui-react'
import TurnMessage from '../components/TurnMessage'
import GameArea from '../containers/GameArea'
import EndGameModal from '../components/EndGameModal'
import ScoreScreen from '../components/ScoreScreen'
import PlayerNames from '../components/PlayerNames'
import PointCounter from '../components/PointCounter'

import { store } from 'react-notifications-component';


function Board(props) {

    // console.log(props)
    // console.log("active player", props.ctx.activePlayers)
    // if (props.ctx.gameover) {
    //     return (
    //     );
    //   }


    useEffect(() => {
        if (props.G.notification) {
            store.addNotification({
                title: props.G.notification.includes("correct") ? "Yes!" : "Oh no!",
                message: props.G.notification,
                type: props.G.notification.includes("correct") ? "success" : "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });          
        }
    }, [props.G.notification])

    const playerNames = props.gameMetadata.map(player => player.name)
    // console.log(props)
    // console.log(playerNames)

    const stage = props.ctx.activePlayers ? props.ctx.activePlayers[props.playerID] : "gameover"
    return(
        <>
            { 
                props.ctx.gameover 
                    ?   <>
                            <EndGameModal gameover={props.ctx.gameover} />
                            <Grid>
                                <Grid.Row centered>
                                    <Grid.Column width={6}>
                                        <ScoreScreen gameover={props.ctx.gameover} playerNames={playerNames}/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </>
                    :  
                    <>
                        <Grid>
                            <Grid.Row centered>
                                <Grid.Column width={8}>
                                    <TurnMessage stage={stage} />
                                </Grid.Column>

                            </Grid.Row>
                            <Grid.Column width={3}>
                                <PlayerNames currentPlayer={props.ctx.currentPlayer} playerNames={playerNames} />

                            </Grid.Column>

                            <Grid.Column width={10}>
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
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <PointCounter points={props.G.points} cardsLeft={props.G.cardsLeft}/>
                            </Grid.Column>
                        </Grid>
                    </>
            }
            

            {/* <div>{props.G.word}</div> */}
    
            



        </>
    )
}

export default Board