import React from "react";
import { NavBar, LoginForm } from "../components";
import styled from "styled-components";

interface LoginPageProps {
  setLoggedIn(loggedIn: boolean): void;
}

export default function LoginPage(props: LoginPageProps) {
  return (
    <>
      <LoginForm setLoggedIn={props.setLoggedIn} />
    </>
  );
}
