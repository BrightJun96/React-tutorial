import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./routes/About";
import LayOut from "./routes/LayOut";
import Videos from "./routes/Videos";
import Configuration from "./routes/Configuration";
import Login from "./routes/Login";
const App = () => {
  function useAuth() {
    const [authed, setAuthed] = React.useState(false);

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

  const { authed } = auth;
  console.log("layout page render");

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut auth={auth} />}>
          <Route path="/about" element={<About auth={auth} />} />
          <Route path="/videos" element={<Videos auth={auth} />} />
          <Route
            path="/configuration"
            element={<Configuration auth={auth} />}
          />
          <Route path="/login" element={<Login auth={auth} />} />
        </Route>
        <Route path="*" element={<h1>No Match!</h1>} />
      </Routes>
    </div>
  );
};

export default App;
