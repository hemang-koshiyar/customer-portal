import React from "react";
import styledComponents from "styled-components";

const Login = () => {
  const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    flex-wrap: wrap;
    align-items:center;
    height:100vh;
   
    `;
    const Content = styledComponents.div`
    box-shadow: 0 0 5px grey;
    `;
  const Header = styledComponents.h1`
    text-align:center;
    
    padding: 1% 3%;
    `;

  const Input = styledComponents.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  `;
  return (
    <Wrapper>
      <Content>
        <Header>Login</Header>
        <form>
            <div>
                
            </div>
        </form>
        <Input type="email" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
      </Content>
    </Wrapper>
  );
};

export default Login;
