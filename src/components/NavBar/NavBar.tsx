import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import {
  NavBrand,
  NavItem,
  NavLink,
  StyledNav,
  MenuIcon,
  NavMenu,
} from "./NavBar.elements";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    console.log("NavBar.ts: toggleMenu");
    setShowMenu(!showMenu);
  }

  function logoutUser() {
    console.log("NavBar.ts: logoutUser");
  }
  return (
    <StyledNav>
      <NavBrand>Lichess Study</NavBrand>
      <MenuIcon onClick={toggleMenu}>
        {!showMenu ? <FaBars size={40} /> : <FaTimes size={40} />}
      </MenuIcon>
      <NavMenu showMenu={showMenu}>
        <NavItem>
          <NavLink to="/studies">Studies</NavLink>
        </NavItem>
        <NavItem grow={1}>
          <NavLink to="#">Create study</NavLink>
        </NavItem>
        <NavItem hideOnMobile>Welcome, User</NavItem>
        <NavItem>
          <NavLink to="#" onClick={logoutUser}>
            Logout
          </NavLink>
        </NavItem>
      </NavMenu>
    </StyledNav>
  );
}
