import React from 'react'
import { Menu } from 'semantic-ui-react'


function PointCounter(props) {

    return(
        <Menu
        icon='labeled'
      //   style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
        vertical
      >
        <Menu.Item 
            content={`Points: ${props.points}`} 
                  />
         <Menu.Item 
            content={`Cards Left: ${props.cardsLeft}`} 
                  />
          

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

export default PointCounter