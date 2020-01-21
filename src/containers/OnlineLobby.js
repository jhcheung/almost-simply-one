import React, { useEffect} from "react";
import CreateGame from '../components/CreateGame'
import GameRooms from './GameRooms'
import { connect } from 'react-redux'
import { toggleInGame, loginUser } from '../actions/users'
import BasicLogin from '../components/BasicLogin'
import { Game } from "boardgame.io/core";
import EndGameModal from '../components/EndGameModal'
import ScoreScreen from '../components/ScoreScreen'
import ExitButton from '../components/ExitButton'



const selectGameName = props => props.gameComponents[0].game.name;


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

    useEffect(() => {
        if (!currentUser.name && (playerName !== "Visitor" || playerName !== "") && phase !== "enter") {
            loginDispatch({
                name: playerName
            })
        }
    }, [currentUser.name, playerName, phase, loginDispatch])

    // useEffect(() =>  {
    //     if (currentUser.name !== "Visitor" && currentUser.name !== "" && phase !== "play" && playerName !== currentUser.name) {
    //         onEnterLobby(currentUser.name)
    //     } 
    // }, [currentUser.name, phase, onEnterLobby, playerName])

    useEffect(() => {
        const selectAllPlayersNames = (rooms) => {
            const playersNames = [];
          
            if (!Array.isArray(rooms)) {
              return playersNames;
            }
          
            rooms.forEach(gameInstance => {
              gameInstance.players.forEach(player => {
                if (player.name) {
                  playersNames.push(player.name);
                }
              });
            });
          
            return playersNames;
          };
          
        if (selectAllPlayersNames(rooms).includes(currentUser.name)) {
            toggleDispatch(true)
        } else {
            toggleDispatch(false)
        }
    }, [rooms, currentUser.name, toggleDispatch])

    console.log(props)
    const displayedRooms = () => {
        if (currentUser && currentUser.inGame) {
            // return rooms
            return rooms.filter(room => room.players.find(player => player.name === currentUser.name))
        } else {
            return rooms
        }
    }

    const handleLeaveRoom = () => {
        const currentPlayerGames = rooms.filter(room => room.players.some(player => player.name === playerName))
        currentPlayerGames.forEach(game => onLeaveRoom(selectGameName(props), game.gameID))
    }

    switch (phase) {
        case "enter":
            // loginDispatch({
            //     name: "Jimmy"
            // }) 
            // onEnterLobby(currentUser.name)
            return (
                <BasicLogin loginDispatch={loginDispatch} onEnterLobby={onEnterLobby} />
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
                        onExitLobby={onExitLobby}
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
                <>
                    <ExitButton playerName={playerName} handleLeaveRoom={handleLeaveRoom} />
                    {runningGame && (
                            
                            <runningGame.app
                                gameID={runningGame.gameID}
                                playerID={'' + runningGame.playerID}
                                credentials={runningGame.credentials}
                            />
                    )}
                </>
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