import React from 'react';
// import { Client } from "boardgame.io/react";
import AlmostSimplyOne from "../boardgame.io/AlmostSimplyOne";
import AlmostSimplyOneBoard from "../boardgame.io/Board";
// import { SocketIO } from 'boardgame.io/multiplayer'
import { Lobby } from 'boardgame.io/react';
import OnlineLobby from './OnlineLobby'
// import { Local } from 'boardgame.io/multiplayer';
import { Container } from 'semantic-ui-react'
require('dotenv').config()



// const AlmostSimplyOneClient = Client({
//   game: AlmostSimplyOne,
//   board: AlmostSimplyOneBoard,
//   multiplayer: SocketIO({ server: 'http://localhost:8000/' })
//   // multiplayer: Local()
// });


function Game() {
    const PORT = process.env.PORT || 8000;

    const hostname = window.location.hostname;
    const url = window.location.protocol+'//'+hostname+(window.location.port ? ':'+window.location.port: '');

    return(
      <Container style={{paddingTop: '100px'}}>
        <Lobby
            gameServer={(process.env.NODE_ENV === 'production') ? `${url}` : `${hostname}:${PORT}`}
            lobbyServer={(process.env.NODE_ENV === 'production') ? `${url}` : `${hostname}:${PORT}`}
            gameComponents={ [{game: AlmostSimplyOne, board: AlmostSimplyOneBoard}]}
            debug={false}
            renderer={({
                errorMsg,
                gameComponents,
                rooms,
                phase,
                playerName,
                runningGame,
                handleEnterLobby,
                handleExitLobby,
                handleCreateRoom,
                handleJoinRoom,
                handleLeaveRoom,
                handleExitRoom,
                handleRefreshRooms,
                handleStartGame
              }) => (
                <OnlineLobby
                  errorMsg={errorMsg}
                  gameComponents={gameComponents}
                  rooms={rooms}
                  phase={phase}
                  playerName={playerName}
                  runningGame={runningGame}
                  onEnterLobby={handleEnterLobby}
                  onExitLobby={handleExitLobby}
                  onCreateRoom={handleCreateRoom}
                  onJoinRoom={handleJoinRoom}
                  onLeaveRoom={handleLeaveRoom}
                  onExitRoom={handleExitRoom}
                  onRefreshRooms={handleRefreshRooms}
                  onStartGame={handleStartGame}
                />
              )}
        />

      </Container>
    )
} 

export default Game