import React, { useEffect} from "react";
import { connect } from 'react-redux'
import { toggleInGame, loginUser, logoutUser } from '../actions/users'
import BasicLogin from '../components/BasicLogin'
import ExitButton from '../components/ExitButton'
import LobbyPage from './LobbyPage'
import { Lobby } from "boardgame.io/dist/cjs/react";
import { Grid } from 'semantic-ui-react'



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
        onExitRoom,
        currentUser,
        loginDispatch,
        toggleDispatch,
        onStartGame, 
        logoutDispatch
    } = props;
    
    // useEffect(() =>  {
    // }, [])
    // !currentUser.name &&
    useEffect(() => {
        
        if ((playerName !== "Visitor" || playerName !== "") && phase !== "enter") {
            loginDispatch({
                name: playerName
            })
        }
    }, [playerName, phase, loginDispatch])

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

    // console.log(props)
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
        onExitRoom()
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
                <LobbyPage 
                    gameName={selectGameName(props)}
                    onJoinRoom={onJoinRoom} 
                    onCreateRoom={onCreateRoom} 
                    toggleDispatch={toggleDispatch}
                    currentUser={currentUser}
                    onExitLobby={onExitLobby} 
                    logoutDispatch={logoutDispatch}
                    playerName={playerName}
                    onEnterLobby={onEnterLobby}
                    rooms={displayedRooms()} 
                    onLeaveRoom={onLeaveRoom}
                    onStartGame={onStartGame}
                />
            )
        case "play": 

            return (
                <>
                    {runningGame && (
                            
                            <runningGame.app
                                gameID={runningGame.gameID}
                                playerID={'' + runningGame.playerID}
                                credentials={runningGame.credentials}
                            />
                    )}
                    <Grid>
                        <Grid.Column floated="right" width={3} >

                            <ExitButton playerName={playerName} handleLeaveRoom={handleLeaveRoom} />
                        </Grid.Column>
                    </Grid>

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
        loginDispatch: (user) => dispatch(loginUser(user)),
        logoutDispatch: () => dispatch(logoutUser())
    }
}

export default connect(msp, mdp)(OnlineLobby);