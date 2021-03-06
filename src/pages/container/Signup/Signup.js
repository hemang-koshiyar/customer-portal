import React from "react";
import { NotificationManager } from "../../../react-notifications";
import Login from "../Login/Login";
import "./Signup.module.css";
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
  // eslint-disable-next-line
  const mobileReg = /^[0-9\b]+$/;
  const verifyDetails = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (signupData.name === "") {
      NotificationManager.warning("Please add name!");
    } else if (signupData.email === "") {
      NotificationManager.warning("Please enter your email!");
    } else if (!emailRegex.test(signupData.email)) {
      NotificationManager.warning("Please enter valid email!");
    } else if (signupData.phone === "" || !mobileReg.test(signupData.phone)) {
      NotificationManager.warning("Please enter valid mobile no!");
    } else if (signupData.city === "") {
      NotificationManager.warning("Please enter your city!");
    } else if (signupData.country === "") {
      NotificationManager.warning("Please enter your country!");
    } else if (signupData.password === "") {
      NotificationManager.warning("Please enter your password!");
    } else {
      setLocalData([...localData, signupData]);
      NotificationManager.success("Signup Successful");
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
              onClick={() => setShowButton({ signup: true, login: false })}
              className={showButton.signup ? "activeButtons" : ""}
            >
              Sign up
            </Button>
            <Button
              showButton={showButton}
              onClick={() => setShowButton({ login: true, signup: false })}
              className={showButton.login ? "activeButtons" : ""}
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
