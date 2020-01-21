import React from "react";

import { Button, Icon } from 'semantic-ui-react'


const ExitButton = (props) => {
    console.log(props)
    // const handleClick = () => {
    //     props.onLeaveRoom()
    // }

    return(
        <>
            <Button icon labelPosition='left' onClick={props.handleLeaveRoom} >
                <Icon name='backward' />

                Leave to Lobby
            </Button>
        </>
    )

}
;

export default ExitButton;