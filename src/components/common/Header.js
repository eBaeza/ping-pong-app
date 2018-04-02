import React from 'react'
import {
  Navbar, NavbarBrand, NavbarMenu, NavbarItem, NavbarEnd
} from 'bloomer'
import Icon from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <Navbar className="is-info">
      <NavbarBrand>
        <NavbarItem>
          <span className="icon is-medium">
            <Icon icon="table-tennis" size="lg" />
          </span> PING PONG
        </NavbarItem>
        <NavbarItem
          isHidden='desktop'
          href="https://github.com/eBaeza/ping-pong-app"
        >
          <span className="icon is-medium">
            <Icon icon={['fab', 'github']} size="lg" />
          </span>
        </NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd>
          <NavbarItem href="https://github.com/eBaeza/ping-pong-app">
            <span className="icon is-medium">
              <Icon icon={['fab', 'github']} size="lg" />
            </span>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
