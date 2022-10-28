import React from "react";
import { Route, Routes } from "react-router-dom";
import Scanner from "./pages/scanner/Scanner";
import "./index.css";
import Layout from "./pages/Layout/Layout";
import data from "./data.json";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/scanner/:title" element={<Scanner data={data} />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
