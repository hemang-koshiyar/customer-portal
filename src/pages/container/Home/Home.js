import React from "react";
import { NotificationManager } from "../../../react-notifications";
import Portal from "../Portal/Portal";
import Signup from "../Signup/Signup";

const Home = () => {
  const getLSData = () => {
    const users = localStorage.getItem("users");
    if (users && users.length > 0) {
      return JSON.parse(users);
    } else {
      return [];
    }
  };

  const [localData, setLocalData] = React.useState(getLSData() || []);
  const [signupData, setSignUpData] = React.useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    password: "",
  });
  const [loginData, setLoginData] = React.useState({});
  const [showActive, setShowActive] = React.useState();
  let userLogin =
    localData &&
    localData.find((el) => {
      return (
        el !== null &&
        el.email === loginData.email &&
        el.password === loginData.password
      );
    });

  const checkDetails = (e) => {
    e.preventDefault();
    if (!userLogin || userLogin === {}) {
      NotificationManager.error("Invalid credentials!");
    } else {
      NotificationManager.success("Login Successful");
      localStorage.setItem("active", JSON.stringify({ ...userLogin }));
      setShowActive(true);
    }
  };

  React.useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("active"));
    if (activeUser) {
      setShowActive(true);
    }
  }, []);

  return (
    <React.Fragment>
      {showActive ? (
        <Portal setShowActive={setShowActive} setLocalData={setLocalData} />
      ) : (
        <Signup
          signupData={signupData}
          setSignUpData={setSignUpData}
          localData={localData}
          setLocalData={setLocalData}
          loginData={loginData}
          setLoginData={setLoginData}
          checkDetails={checkDetails}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
