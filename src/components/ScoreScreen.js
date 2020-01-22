import React from 'react'
import { Header, Table } from 'semantic-ui-react'

const ScoreScreen = (props) => {

    return (
        <>
            <Table celled color="green">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Player</Table.HeaderCell>
                        <Table.HeaderCell>Points</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {
                        Object.values(props.gameover.players).map((player, index) => {
                            if (props.playerNames[index]) {
                                return (
                                    <Table.Row>
                                        <Table.Cell>
                                        <Header as='h4' image>
                                            <Header.Content>
                                                {props.playerNames[index]}
                                            {/* <Header.Subheader>Human Resources</Header.Subheader> */}
                                            </Header.Content>
                                        </Header>
                                        </Table.Cell>
                                        <Table.Cell>{player.points}</Table.Cell>
                                    </Table.Row>
                                )
                            }
                        })
                    }
                </Table.Body>
            </Table>
        
        </>
    )  
  }


  

export default ScoreScreen