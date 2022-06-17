import React from "react";
import Home from "./pages/container/Home";
import "./react-notifications/lib/notifications.css";
import { NotificationContainer } from "./react-notifications";

const App = () => {
  return (
    <React.Fragment>
      <Home />
      <NotificationContainer />
    </React.Fragment>
  );
};
export default App;
