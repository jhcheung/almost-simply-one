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
          Almost Simply One
        </Menu.Item>
        <Menu.Item position='right'>{props.currentUser.name}</Menu.Item>

      </Container>
    </Menu>
)

export default MenuBar