import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import TurnMessage from '../components/TurnMessage'
import GameArea from '../containers/GameArea'
import EndGameModal from '../components/EndGameModal'
import ScoreScreen from '../components/ScoreScreen'
import PlayerNames from '../components/PlayerNames'
import PointCounter from '../components/PointCounter'
import CountdownTimer from '../components/CountdownTimer'


import { store } from 'react-notifications-component';


function Board(props) {

    // console.log(props)
    // console.log("active player", props.ctx.activePlayers)
    // if (props.ctx.gameover) {
    //     return (
    //     );
    //   }


    useEffect(() => {
        if (props.G.notification && !props.ctx.gameover) {
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
    }, [props.G.notification, props.ctx.gameover])

    const playerNames = props.gameMetadata.map(player => player.name)
    // console.log(props)
    // console.log(playerNames)

    const isCounting = props.ctx.activePlayers 
                        ? Object.keys(props.ctx.activePlayers).find(playerNum => props.ctx.activePlayers[playerNum] === 'elimination') === props.playerID
                        : null
    const eliminationStage = props.ctx.activePlayers
                            ? Object.values(props.ctx.activePlayers).find(stage => stage === 'elimination')
                            : null
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
                                            currentPlayer={props.ctx.currentPlayer}
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
                                            eliminateClue={props.moves.eliminateClue}
                                            endElimination={props.moves.endElimination}
                                        />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <PointCounter points={props.G.points} cardsLeft={props.G.cardsLeft}/>
                                {
                                    eliminationStage
                                    ?  <CountdownTimer 
                                            isCurrentPlayer={props.playerID === props.ctx.currentPlayer}
                                            revealClues={props.moves.revealClues}
                                            endElimination={props.moves.endElimination}
                                            countdown={props.G.countdown}
                                            countdownNum={props.moves.countdownNum}
                                            isCounting={isCounting}
                                        />
                                    : null
                                }
                            </Grid.Column>
                        </Grid>
                    </>
            }

        </>
    )
}

export default Board