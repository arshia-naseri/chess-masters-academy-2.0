import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./main";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
