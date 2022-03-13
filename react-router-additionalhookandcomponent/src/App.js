import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import LayOut from "./routes/LayOut";
import Login from "./routes/Login";
import Settings from "./routes/Settings";
const App = () => {
  const [authed, setAuthed] = useState(false);
  function login() {
    setAuthed(true);
  }

  function logout() {
    setAuthed(false);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut authed={authed} logout={logout} />}>
          <Route
            path="dashboard"
            element={
              authed ? <Dashboard /> : <Navigate to="/login" replace={true} />
            }
          />
          <Route
            path="login"
            element={<Login authed={authed} login={login} />}
          />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
