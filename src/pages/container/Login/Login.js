import React from "react";
import { Input, InputItems, Label, LoginButton } from "./Login.styled";

const Login = ({ loginData, setLoginData, checkDetails }) => {
  return (
    <React.Fragment>
      <InputItems>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
        />
      </InputItems>
      <InputItems>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          maxLength={10}
          required
        />
      </InputItems>
      <LoginButton type="submit" onClick={(e) => checkDetails(e)}>
        Login
      </LoginButton>
    </React.Fragment>
  );
};

export default Login;
