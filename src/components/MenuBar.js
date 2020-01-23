import React from 'react'
import {
  Container,
  Menu
} from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const MenuBar = (props) => (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={Link} to='/' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
          Almost Simply One
        </Menu.Item>
        <Menu.Item position='right'>{props.currentUser.name}</Menu.Item>

        {/* <Dropdown position='right' item simple text={props.currentUser.name}>
          <Dropdown.Menu>
            <Dropdown.Item icon="sign out" onClick={() => props.logoutDispatch()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Menu>
)

export default MenuBar