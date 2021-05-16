import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link, useHistory } from "react-router-dom";
import { StyledForm } from "./LoginForm.elements";

interface LoginFormProps {
  setLoggedIn(loggedIn: boolean): void;
}

export default function LoginForm(props: LoginFormProps) {
  const history = useHistory();
  function submitForm() {
    //check if form is valid
    //call await loginService
    props.setLoggedIn(true);
    history.push("/");
  }

  return (
    <StyledForm className="p-grid p-justify-center p-align-center">
      <div id="form" className="p-fluid">
        <div>
          <h1>Sign in</h1>
        </div>
        <div className="p-field">
          <label htmlFor="username">Username or email</label>
          <InputText id="username" type="text" />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password toggleMask={true} id="password" />
        </div>
        <Button type="button" label="SIGN IN" onClick={() => submitForm()} />
        <div className="alternative">
          <Link to="/register">Register</Link>
          <Link to="/forgot">Forgot password</Link>
        </div>
      </div>
    </StyledForm>
  );
}
