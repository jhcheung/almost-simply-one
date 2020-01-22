import React from 'react';
import { Button } from 'semantic-ui-react'


function ExitLobbyButton(props) {

    const handleClick = () => {
        props.onExitLobby();
        props.logoutDispatch();
    }
    
    return(
        <Button onClick={handleClick}>Exit Lobby</Button>
    )
}

export default ExitLobbyButton