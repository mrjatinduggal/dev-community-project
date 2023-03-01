import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
// import Success from "./components/dashboard/success/Success";
import Failure from "./pages/dashboard/failure/Failure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
