import React from "react";
import Login from "../Login/Login";
import {
  Button,
  Buttons,
  Form,
  FormBody,
  H1,
  BottomText,
  Input,
  InputItems,
  Label,
  SignupButton,
} from "./Signup.styled";

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
      setLocalData([...localData, ...signupData]);
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
              showButton={showButton}
              onClick={() =>
                setShowButton({ ...showButton, signup: true, login: false })
              }
            >
              Sign up
            </Button>
            <Button
              showButton={showButton}
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
              <BottomText
                onClick={() =>
                  setShowButton({ ...showButton, login: true, signup: false })
                }
              >
                Already signed up ?
              </BottomText>
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
