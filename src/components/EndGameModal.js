import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const EndGameModal = (props) => {

	const [modalOpen, setOpenModal] = useState(true)
    return (
      <Modal open={props.gameover && modalOpen} basic size='small'>
        <Header icon='pencil alternate' content='Game Over' />
        <Modal.Content>
          <p>
            You've completed your game of 'Almost Simply One' with a score of {props.gameover.finalPoints}!
          </p>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color='standard' inverted>
            <Icon name='backward' /> Leave to Lobby
          </Button> */}

          <Button basic color='green' inverted onClick={() => setOpenModal(false)}>
            <Icon name='remove' /> See Score Breakdown
          </Button>
        </Modal.Actions>
      </Modal>
    )  
  }


  

export default EndGameModal