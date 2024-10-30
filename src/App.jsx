import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AuthContainer from "./components/AuthContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AuthContainer />} />
        <Route
          path="forgot-password"
          element={<AuthContainer component="ForgotPass" />}
        />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
