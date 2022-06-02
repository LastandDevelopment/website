import React, { useState, useEffect, Suspense } from "react";

import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import TitleBar from "./components/Titlebar";
import Home from "./components/Home";
import MeteorExtinctionHome from "./components/MeteorExtinctionHome";
import MeteorExtinctionDownload from "./components/MeteorExtinctionDownload";
import WoodenGUIHome from "./components/WoodenGUIHome";
import WoodenGUIDownload from "./components/WoodenGUIDownload";
import Contact from "./components/Contact";
import IssueTemplate from "./components/IssueTemplate";
import CheckMEVersion from "./components/CheckMEVersion";

import CustomProgress from "./components/SuspenseFallback";

import {
  getStorageMode,
  setStorageMode,
} from "./components/services/SettingsService";
import BrowserTitle from "./components/BrowserTitle";
import Changelog from "./components/Changelog";
import NotFound from "./components/404";

function App() {
  const [themeMode, setThemeMode] = useState(getStorageMode);
  const appliedTheme = createTheme(getTheme(themeMode));

  useEffect(() => {
    setStorageMode(themeMode);
  }, [themeMode]);

  const location = useLocation();

  const [locationBefore, setLocationBefore] = useState(location);

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionLocation, setTransitionLocation] = useState(location);

  const [transitionType, setTransitionType] = useState("toContact");

  const handleThemeModeChange = () => {
    setThemeMode((t) => (t === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (location.pathname === "/") {
      if (locationBefore.pathname.includes("meteorextinction")) {
        setTransitionType("fromMEToHome");
      } else if (locationBefore.pathname.includes("woodengui")) {
        setTransitionType("fromWGToHome");
      } else {
        setTransitionType("fromContactToHome");
      }
    } else {
      if (location.pathname.includes("meteorextinction")) {
        setTransitionType("toME");
      } else if (location.pathname.includes("woodengui")) {
        setTransitionType("toWG");
      } else {
        setTransitionType("toContact");
      }
    }
    setLocationBefore(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setTransitionLocation(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationBefore]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <Suspense fallback={<CustomProgress themeMode={themeMode} />}>
        <CssBaseline />
        <BrowserTitle location={location} />
        <TitleBar
          themeMode={themeMode}
          handleThemeModeChange={handleThemeModeChange}
        />
        <TransitionGroup>
          <CSSTransition
            key={transitionLocation.key}
            classNames={transitionType}
            timeout={450}
            onExited={() => setDisplayLocation(location)}
          >
            <Routes location={transitionLocation}>
              <Route
                path="*"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <NotFound />
                  </div>
                }
              ></Route>
              <Route
                path="/"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <Home />
                  </div>
                }
              ></Route>
              <Route
                path="meteorextinction"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <MeteorExtinctionHome themeMode={themeMode} />
                  </div>
                }
              ></Route>
              <Route
                path="meteorextinction/download"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <MeteorExtinctionDownload themeMode={themeMode} />
                  </div>
                }
              ></Route>
              <Route
                path="meteorextinction/download/changelog"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <Changelog
                      displayLocation={displayLocation}
                      location={location}
                    />
                  </div>
                }
              ></Route>
              <Route
                path="woodengui"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <WoodenGUIHome themeMode={themeMode} />
                  </div>
                }
              ></Route>
              <Route
                path="woodengui/download"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <WoodenGUIDownload />
                  </div>
                }
              ></Route>
              <Route
                path="contact"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <Contact themeMode={themeMode} />
                  </div>
                }
              ></Route>
              <Route
                path="contact/issue-template"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <IssueTemplate themeMode={themeMode} />
                  </div>
                }
              ></Route>
              <Route
                path="meteorextinction/download/update"
                element={
                  <div style={{ position: "absolute", width: "100%" }}>
                    <CheckMEVersion
                      displayLocation={displayLocation}
                      location={location}
                    />
                  </div>
                }
              ></Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
