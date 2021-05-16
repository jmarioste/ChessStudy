import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  background: #262421;
  color: white;
  height: 80px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 20px;
`;

export default function Header() {
  return <StyledHeader>Lichess Study</StyledHeader>;
}
