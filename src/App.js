import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import UserProfile from "./screens/UserProfile";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./screens/Home";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./components/Navbar";
import CreateScreen from "./screens/CreateScreen";

function App({ match }) {
  return (
    <ChakraProvider>
      <div className="App">
          <Router>
      <Navbar/>
            <Routes>
              <Route path="" element={<Home/>} exact/>
              <Route path="login" element={<LoginScreen/>} exact/>
              <Route path="create" element={<CreateScreen/>} exact/>
              <Route path="dashboard/" element={<Dashboard />} exact />
              <Route path="dashboard/:id/" element={<UserProfile />} />
            </Routes>
          </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
