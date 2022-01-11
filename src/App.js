import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeSet = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtilis"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleModeSet}
        />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm heading="Enter text to analyze" mode={mode} />}
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>

        {/* <Alert content={alert} /> */}
      </Router>
    </>
  );
}

export default App;
