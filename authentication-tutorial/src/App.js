import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LayOut from "./LayOut";
import Dashboard from "./Dashboard";
import Pricing from "./Pricing";
import Settings from "./Settings";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

const App = () => {
  function useAuth() {
    const [authed, setAuthed] = useState(false);

    return {
      authed,
      login() {
        return new Promise((res) => {
          setAuthed(true);
          res();
        });
      },
      logout() {
        return new Promise((res) => {
          setAuthed(false);
          res();
        });
      },
    };
  }

  const auth = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut auth={auth} />}>
          <Route
            path="dashboard"
            element={
              <RequireAuth auth={auth}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="pricing" element={<Pricing />} />
          <Route
            path="settings"
            element={
              <RequireAuth auth={auth}>
                <Settings />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login auth={auth} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
