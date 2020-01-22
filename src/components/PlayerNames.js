import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'


function PlayerNames(props) {
    console.log(props)

    const colors = ['teal', 'green', 'yellow', 'brown', 'grey', 'brown', 'orange' ]
    return(
            <Menu
              icon='labeled'
              pointing
            //   style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
                { 
                    props.playerNames.map((playerName, index)=>  
                        <Menu.Item 
                            key={index}
                            style={{backgroundColor: colors[index]}}
                            content={playerName} 
                            active={parseInt(props.currentPlayer) === index}
                        />
                    ) 
                }

                {/* <Menu.Item>
                    <Icon name='facebook' />
                    Share
                </Menu.Item>

                <Menu.Item>
                    <Icon name='mail' />
                    Email
                </Menu.Item> */}
            </Menu>
    )
}

export default PlayerNames