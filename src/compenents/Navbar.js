import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavbarElement'

function Navbar() {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Menu
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Locations
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Wait List
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Catering
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Careers
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Franchising
          </MenuLink>
          <MenuLink to="/" activeStyle>
            Press
          </MenuLink>
          <MenuLink to="/" activeStyle>
            E-Club
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}

export default Navbar