import React from 'react';
import GameRoom from '../components/GameRoom'
import { Card } from 'semantic-ui-react'
// import { LobbyRoomInstance } from 'boardgame.io'


function GameRooms(props) {
    
    return(
        <>
            <Card.Group className="game-rooms" >
                {props.rooms.map((room, index) => <GameRoom 
                                            key={index} 
                                            room={room} 
                                            onJoinRoom={props.onJoinRoom} 
                                            playerName={props.playerName} 
                                            gameName={props.gameName}
                                            onEnterLobby={props.onEnterLobby}
                                            toggleDispatch={props.toggleDispatch}
                                            onLeaveRoom={props.onLeaveRoom}
                                            onStartGame={props.onStartGame}
                                        />)}
            </Card.Group>
        </>
    )
}

export default GameRooms