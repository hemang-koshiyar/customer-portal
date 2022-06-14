import React from "react";
import Portal from "./Portal";
import Signup from "./Signup";

const Home = () => {
  const getLSData = () => {
    const user = localStorage.getItem("users");
    if (user.length && user.length > 0) {
      return JSON.parse(user);
    } else {
      return [];
    }
  };
  const [localData, setLocalData] = React.useState(getLSData());
  const [signupData, setSignUpData] = React.useState({});
  const [loginData, setLoginData] = React.useState({});
  const [showDashboard, setShowDashboard] = React.useState();
  const [showActive, setShowActive] = React.useState(false);
  const userLogin = localData.filter((el) => {
    return (
      el !== null &&
      el.email === loginData.email &&
      el.password === loginData.password
    );
  });

  const checkDetails = (e) => {
    e.preventDefault();
    if (userLogin.length === 0) {
      alert("Invalid credentials!");
    } else {
      alert("Login successful!");
      localStorage.setItem("active", JSON.stringify(userLogin));
      setShowDashboard(true);
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
        <Portal />
      ) : !showDashboard ? (
        <Signup
          signupData={signupData}
          setSignUpData={setSignUpData}
          localData={localData}
          setLocalData={setLocalData}
          loginData={loginData}
          setLoginData={setLoginData}
          checkDetails={checkDetails}
        />
      ) : (
        <Portal />
      )}
    </React.Fragment>
  );
};

export default Home;
