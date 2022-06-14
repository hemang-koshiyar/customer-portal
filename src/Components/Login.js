import React from "react";
import styledComponents from "styled-components";

const InputItems = styledComponents.div`
margin-bottom: 3%;
margin-top: 5%;
`;
const LoginButton = styledComponents.button`
    width:100%;
    background: #433ef1;
    color: #fff;
    margin-top: 3%;
    border: none;
    font-weight: bold;
    font-size: 20px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 3%;
    :hover{
        background: #800080;
    }


`;
const Input = styledComponents.input`
    height: 20px;
    width: 93%;
    padding: 5% 5%;
    margin: 2% auto;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 3%;
    font-size: 20px;
    display: block;
    :hover{
      border: 2px solid #433ef1;
      ::placeholder{
        color: #433ef1;
        
      }
    }
   
`;
const Label = styledComponents.label`
  font-weight: bold;
  color: #433ef1;
  font-size: 20px;
  margin-bottom: 1.5%;
`;
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
