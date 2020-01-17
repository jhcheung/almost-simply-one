import React, {Fragment} from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import TurnMessage from '../components/TurnMessage'
import GameArea from '../containers/GameArea'
import EndGameModal from '../components/EndGameModal'


function Board(props) {

    // console.log(props)
    // console.log("active player", props.ctx.activePlayers)
    // if (props.ctx.gameover) {
    //     return (
    //     );
    //   }
    const stage = props.ctx.activePlayers ? props.ctx.activePlayers[props.playerID] : "gameover"
    debugger
    return(
        <>
            <EndGameModal gameover={props.ctx.gameover} />

            <div>{props.G.word}</div>
            <div>{props.G.points}</div>

            <TurnMessage stage={stage} />
            <GameArea 
                        stage={stage} 
                        drawCard={props.moves.drawCard}
                        giveClue={props.moves.giveClue}
                        guessClue={props.moves.guessClue}
                        passClue={props.moves.passClue}
                    />
    
            



        </>
    )
}

export default Board