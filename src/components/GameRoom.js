import React from 'react';
import { connect } from 'react-redux'
import { Button, Card, Feed } from 'semantic-ui-react'

function GameRoom(props) {
    const freeSeat = props.room.players.find(player => !player.name);
    const playerSeat = props.room.players.find(
        player => player.name === props.currentUser.name
      );
  

    const handleJoin = () => {
        // console.log(props)
        // console.log(props.room.gameName, props.room.gameID)

        props.onJoinRoom(props.gameName, props.room.gameID, freeSeat.id)
        // console.log("hello")
        props.toggleDispatch(true)
    }

    const handlePlay = () => {
        props.onStartGame(props.gameName, {
            gameID: props.room.gameID,
            playerID: '' + playerSeat.id,
            numPlayers: props.room.players.length,
        })
    }


    const handleLeave = () => {
        props.onLeaveRoom(props.gameName, props.room.gameID)
        props.toggleDispatch(false)
    }
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {props.room.gameID}
                </Card.Header>
            </Card.Content>
            <Card.Content>
                 {
                     props.room.players
                     ? <Feed>
                             {props.room.players.map(
                                 (player, index)=> 
                                 <Feed.Event key={index}>

                                 <Feed.Content>
                                     <Feed.Summary>
                                         {
                                             player.name 
                                             ? `${index + 1}. ${player.name}`
                                             : `${index + 1}. `
                                         }
                                     </Feed.Summary>
                                 </Feed.Content>
                                 </Feed.Event>

                             )}
                     </Feed>
                     : null
                 }
            </Card.Content>
            <Card.Content>
                <div className='ui two buttons'>
                    
                    {
                        freeSeat || !props.room.players.find(player => player.name === props.currentUser.name)
                        ? 
                            <Button onClick={handleJoin}  disabled={!freeSeat} basic color='green'>
                                Join
                            </Button>
                        :
                            <Button onClick={handlePlay}  basic color='green'>
                                Play
                            </Button>


                    }
                    <Button onClick={handleLeave}  disabled={props.currentUser && !props.currentUser.inGame} basic color='red'>
                        Leave
                    </Button>
                </div>
            </Card.Content>

        </Card>
    )
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}

export default connect(msp)(GameRoom)