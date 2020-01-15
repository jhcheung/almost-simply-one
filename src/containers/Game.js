import React from 'react';
// import { Client } from "boardgame.io/react";
import AlmostSimplyOne from "../boardgame.io/AlmostSimplyOne";
import AlmostSimplyOneBoard from "../boardgame.io/Board";
// import { SocketIO } from 'boardgame.io/multiplayer'
import { Lobby } from 'boardgame.io/react';
import OnlineLobby from './OnlineLobby'


// const AlmostSimplyOneClient = Client({
//   game: AlmostSimplyOne,
//   board: AlmostSimplyOneBoard,
//   multiplayer: SocketIO({ server: 'http://localhost:8000/' })
// });


function Game() {
    return(
        <Lobby
            gameServer={`http://${window.location.hostname}:8000`}
            lobbyServer={`http://${window.location.hostname}:8000`}
            gameComponents={ [{game: AlmostSimplyOne, board: AlmostSimplyOneBoard}]}
            debug={true}
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
    )
} 

export default Game