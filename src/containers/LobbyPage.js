import React from 'react'
import ExitLobbyButton from '../components/ExitLobbyButton'
import { Grid } from 'semantic-ui-react'
import CreateGame from '../components/CreateGame'
import GameRooms from './GameRooms'



function LobbyPage(props) {
    const {
        playerName,
        onCreateRoom,
        onEnterLobby,
        onExitLobby,
        onJoinRoom,
        onLeaveRoom,
        currentUser,
        toggleDispatch,
        onStartGame, 
        logoutDispatch,
        gameName,
        rooms
    } = props;

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}/>
                <Grid.Column width={8}>
                    { currentUser && !currentUser.inGame 
                        ? <CreateGame 
                            onJoinRoom={onJoinRoom} 
                            onCreateRoom={onCreateRoom} 
                            gameName={gameName}
                            toggleDispatch={toggleDispatch}
                        />
                        :
                        null
                    }

                </Grid.Column>
                <Grid.Column width={4}/>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column floated='right' width={3}>
                <ExitLobbyButton onExitLobby={onExitLobby} logoutDispatch={logoutDispatch} />
                </Grid.Column> 
            </Grid.Row>

            <Grid.Row>
                <GameRooms 
                    playerName={playerName}
                    onEnterLobby={onEnterLobby}
                    rooms={rooms} 
                    onJoinRoom={onJoinRoom}
                    gameName={gameName}
                    toggleDispatch={toggleDispatch}
                    onLeaveRoom={onLeaveRoom}
                    onStartGame={onStartGame}
                />
            </Grid.Row>

    </Grid>
    )
}

export default LobbyPage