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
const Signup = ({
  signupData,
  setSignUpData,
  loginData,
  localData,
  setLocalData,
  setLoginData,
  checkDetails,
}) => {
  const [showButton, setShowButton] = React.useState({
    signup: true,
    login: false,
  });

  const mobileReg = /^[0-9\b]+$/;
  const verifyDetails = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (signupData.name === "") {
      alert("Please add name!");
    } else if (signupData.email === "") {
      alert("Please enter your email!");
    } else if (!emailRegex.test(signupData.email)) {
      alert("Please enter valid email!");
    } else if (signupData.phone === "" || !mobileReg.test(signupData.phone)) {
      alert("Please enter valid mobile no!");
    } else if (signupData.city === "") {
      alert("Please enter your city!");
    } else if (signupData.country === "") {
      alert("Please enter your country!");
    } else if (signupData.password === "") {
      alert("Please enter your password!");
    } else {
      setLocalData([...localData, signupData]);
      alert("Signup successful!");
      setShowButton({ ...showButton, signup: false, login: true });
    }
  };
  React.useEffect(() => {
    localStorage.setItem("users", JSON.stringify(localData));
  }, [localData]);

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

          {showButton.signup && (
            <React.Fragment>
              <InputItems>
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, name: e.target.value })
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
                    setSignUpData({ ...signupData, email: e.target.value })
                  }
                  required
                />
              </InputItems>
              <InputItems>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  placeholder="Enter your phone"
                  pattern="[0-9]*"
                  onChange={(e) =>
                    setSignUpData({ ...signupData, phone: e.target.value })
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
                    setSignUpData({ ...signupData, city: e.target.value })
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
                    setSignUpData({ ...signupData, country: e.target.value })
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
                    setSignUpData({ ...signupData, password: e.target.value })
                  }
                  required
                />
              </InputItems>
              <SignupButton type="submit" onClick={verifyDetails}>
                Sign up
              </SignupButton>
              <span
                style={{
                  display: "inline-flex",
                  justifyContent: "flex-end",
                  color: "#433ef1",
                  padding: "3% 0",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setShowButton({ ...showButton, login: true, signup: false })
                }
              >
                Already signed up ?
              </span>
            </React.Fragment>
          )}
          {showButton.login && (
            <Login
              loginData={loginData}
              setLoginData={setLoginData}
              checkDetails={checkDetails}
            />
          )}
        </Form>
      </FormBody>
    </React.Fragment>
  );
};

export default Signup;
