import React from "react";
import styledComponents from "styled-components";
import Login from "./Login";

const FormBody = styledComponents.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;

`;

const Form = styledComponents.form`
width: 600px;
height: auto;
background: #fff;
border-radius: 10px;
color: #fff;
box-shadow: 0 0 8px gray;
padding: 50px;
margin-bottom: 5%;

`;
const H1 = styledComponents.h1`
font-weight: bold;
text-align:center;
margin-bottom: 2%;
color: #433ef1;
font-size: 35px;

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

const Buttons = styledComponents.div`
display: flex;
justify-content: space-around;
width:100%;
`;
const Button = styledComponents.button`
border: none;
width: 45%;
padding: 30px;
font-size: 20px;
font-weight: bold;
border-radius: 10px;
:hover{
    cursor: pointer;
    background: #433ef1;
    color: #fff;
}
`;
const InputItems = styledComponents.div`
margin-bottom: 3%;
margin-top: 5%;
`;
const SignupButton = styledComponents.button`
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
const Label = styledComponents.label`
  font-weight: bold;
  color: #433ef1;
  font-size: 20px;
  margin-bottom: 1.5%;
`;
const Signup = () => {
  const [showButton, setShowButton] = React.useState({
    signup: true,
    login: false,
  });
  const [signupData, setSignUpData] = React.useState({});
  return (
    <React.Fragment>
      <H1>Customer Portal</H1>
      <FormBody>
        <Form>
          <Buttons>
            <Button
              style={{
                background: showButton.signup ? "#433ef1" : "transparent",
                color: showButton.signup ? "#fff" : "#433ef1",
              }}
              onClick={() =>
                setShowButton({ ...showButton, signup: true, login: false })
              }
            >
              Sign up
            </Button>
            <Button
              style={{
                background: showButton.login ? "#433ef1" : "transparent",
                color: showButton.login ? "#fff" : "#433ef1",
              }}
              onClick={() =>
                setShowButton({ ...showButton, login: true, signup: false })
              }
            >
              Login
            </Button>
          </Buttons>

          {/* <hr color="#433ef1" /> */}
          {showButton.signup && (
            <React.Fragment>
              <InputItems>
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, Name: e.target.value })
                  }
                  required
                />
              </InputItems>
              <InputItems>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, Email: e.target.value })
                  }
                  required
                />
              </InputItems>
              <InputItems>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  placeholder="Enter your phone"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, Phone: e.target.value })
                  }
                  maxLength={10}
                  required
                />
              </InputItems>
              <InputItems>
                <Label>City</Label>
                <Input
                  type="text"
                  placeholder="Enter your city"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, City: e.target.value })
                  }
                  required
                />
              </InputItems>
              <InputItems>
                <Label>Country</Label>
                <Input
                  type="text"
                  placeholder="Enter your country"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, Country: e.target.value })
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
                    setSignUpData({ ...signupData, Password: e.target.value })
                  }
                  required
                />
              </InputItems>
              <SignupButton type="submit">Sign up</SignupButton>
              <a
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  color: "#433ef1",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowButton({ ...showButton, login: true, signup: false })
                }
              >
                Already signed up ?
              </a>
            </React.Fragment>
          )}
          {showButton.login && <Login />}
        </Form>
      </FormBody>
    </React.Fragment>
  );
};

export default Signup;
