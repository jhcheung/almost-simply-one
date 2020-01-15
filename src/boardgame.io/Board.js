import React, {Fragment} from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'


function Board(props) {

    console.log(props)
    
    return(
        <>
            <div>{props.G.word}</div>
            <Button onClick={() => props.moves.drawCard()}>Test</Button>
        </>
    )
}

export default Board