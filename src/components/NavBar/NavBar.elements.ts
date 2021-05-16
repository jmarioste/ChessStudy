import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  background: #262421;
  color: white;
  height: 80px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px;
`;

export const NavBrand = styled.a`
  flex-grow: 1;
  @media screen and (min-width: 960px) {
    flex-grow: 0;
  }
`;

interface NavMenuProps {
  showMenu?: boolean;
}
export const NavMenu = styled.ul`
  display: flex;
  flex-grow: 1;
  align-items: center;
  text-align: left;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ showMenu }: NavMenuProps) => (showMenu ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: #262421;
    text-align: center;
    padding-left: 0;
    margin: 0;
  }
`;

interface NavItemProps {
  grow?: number;
  hideOnMobile?: boolean;
}

export const NavItem = styled.li`
  padding: 10px;
  flex-grow: ${(props: NavItemProps) => props.grow || 0};
  cursor: pointer;

  @media screen and (max-width: 960px) {
    flex-grow: 0;
    padding: 20px;
    font-size: 1.2em;
    width: 100%;
    border-bottom: 1px solid white;
    display: ${(props: NavItemProps) => props.hideOnMobile && "none"};
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

export const MenuIcon = styled.a`
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
