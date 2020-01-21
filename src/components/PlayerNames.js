import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'


function PlayerNames(props) {
    console.log(props)
    return(
            <Menu
              icon='labeled'
            //   style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
                { 
                    props.playerNames.map((playerName, index)=>  
                        <Menu.Item 
                            key={index}
                            color="red"
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