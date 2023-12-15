import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import PrivateRoutes from "./components/PrivateRoutes"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/*" element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
