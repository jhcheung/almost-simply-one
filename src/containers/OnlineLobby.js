import React, { useEffect} from "react";
import CreateGame from '../components/CreateGame'
import GameRooms from './GameRooms'
import { connect } from 'react-redux'
import { toggleInGame, loginUser } from '../actions/users'

const selectGameName = props => props.gameComponents[0].game.name;
const selectAllPlayersNames = props => {
  const playersNames = [];

  if (!Array.isArray(props.rooms)) {
    return playersNames;
  }

  props.rooms.forEach(gameInstance => {
    gameInstance.players.forEach(player => {
      if (player.name) {
        playersNames.push(player.name);
      }
    });
  });

  return playersNames;
};

function OnlineLobby(props) {
    const {
        errorMsg,
        phase,
        rooms,
        playerName,
        runningGame,
        onCreateRoom,
        onEnterLobby,
        onExitLobby,
        onJoinRoom,
        onLeaveRoom,
        currentUser,
        loginDispatch,
        toggleDispatch,
        onStartGame
    } = props;
    

    // useEffect(() =>  {
    // }, [])

    useEffect(() =>  {
        onEnterLobby(currentUser.name)
        console.log(currentUser)
    }, [currentUser.name])

    useEffect(() => {
        if (selectAllPlayersNames(props).includes(currentUser.name)) {
            toggleDispatch(true)
        } else {
            toggleDispatch(false)
        }
    }, [rooms])

    console.log(props)
    const displayedRooms = () => {
        if (currentUser && currentUser.inGame) {
            // return rooms
            return rooms.filter(room => room.players.find(player => player.name === currentUser.name))
        } else {
            return rooms
        }
    }

    switch (phase) {
        case "enter":
            loginDispatch({
                name: "Jimmy"
            }) 
            // onEnterLobby(currentUser.name)
            return (
                <div>
                    logging in
                </div>
            )
        case "list": 

            return (
                <div>
                    {playerName}
                    {currentUser ? currentUser.name : null}
                    { currentUser && !currentUser.inGame 
                        ? 
                        <CreateGame 
                            onJoinRoom={onJoinRoom} 
                            onCreateRoom={onCreateRoom} 
                            gameName={selectGameName(props)}
                            toggleDispatch={toggleDispatch}
                        />
                        :
                        null
                
                    }
                    <GameRooms 
                        playerName={playerName}
                        onEnterLobby={onEnterLobby}
                        rooms={displayedRooms()} 
                        onJoinRoom={onJoinRoom}
                        gameName={selectGameName(props)}
                        toggleDispatch={toggleDispatch}
                        onLeaveRoom={onLeaveRoom}
                        onStartGame={onStartGame}
                    />
                </div>
            )
        case "play": 
            return (
                runningGame && (
                    <runningGame.app
                      gameID={runningGame.gameID}
                      playerID={'' + runningGame.playerID}
                      credentials={runningGame.credentials}
                    />
                  )
            )
        default: 
            return (
                <div>
                    default
                </div>
            )
    }
    
}

function msp(state) {
    return { 
        currentUser: state.currentUser 
    }
}

function mdp(dispatch) {
    return {
        toggleDispatch: (inGame) => dispatch(toggleInGame(inGame)),
        loginDispatch: (user) => dispatch(loginUser(user))
    }
}

export default connect(msp, mdp)(OnlineLobby);