import React from 'react'
import { Icon, Header, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <Container text>
        <Header
          as='h1'
          content='Almost Simply One'
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '2em',
          }}
        />
        <Header
          as='h2'
          content='1. Write. 2. Compare. 3. Guess'
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
        <Button as={Link} to='/play' primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
}

export default HomePage