import React from 'react'
import { Button } from 'semantic-ui-react'


function DrawCard(props) {
    return (
        <Button onClick={() => props.drawCard()}>Draw Card</Button>
    )
}

export default DrawCard