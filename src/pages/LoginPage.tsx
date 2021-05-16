import React from "react";
import { Header, LoginForm } from "../components";
import styled from "styled-components";

interface LoginPageProps {
  setLoggedIn(loggedIn: boolean): void;
}

export default function LoginPage(props: LoginPageProps) {
  return (
    <>
      <Header></Header>
      <LoginForm setLoggedIn={props.setLoggedIn} />
    </>
  );
}
