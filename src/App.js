import React, { useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { reducer } from "./reducer/reducer";
import { initGameState } from "./constants";
import AppContext from "./contexts/Context";
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components/LandingPage/LangingPage";

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initGameState);
  const providerState = {
    appState,
    dispatch,
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated")
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Store the flag in localStorage
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false"); // Store the flag in localStorage
  };

  return (
    <AppContext.Provider value={providerState}>
      <Router>
        <div>
          <Routes>
            {/* Public Route - Login Page */}
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />

            {/* Protected Route - Chess Game Board as Landing Page */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <LandingPage onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Redirect any unknown routes to login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
