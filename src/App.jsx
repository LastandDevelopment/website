import React, { useState, useEffect, Suspense } from "react";

import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";

import TitleBar from "./components/Titlebar";
import Home from "./components/Home";
import MeteorExtinctionHome from "./components/MeteorExtinctionHome";
import MeteorExtinctionDownload from "./components/MeteorExtinctionDownload";
import Alpha010Changelog from "./components/changelogs/alpha-0.1";
import Alpha011Changelog from "./components/changelogs/alpha-0.1.1";
import Alpha012Changelog from "./components/changelogs/alpha-0.1.2";
import WoodenGUIHome from "./components/WoodenGUIHome";
import WoodenGUIDownload from "./components/WoodenGUIDownload";
import Contact from "./components/contact";
import IssueTemplate from "./components/issueTemplate";
import CheckMEVersion from "./components/CheckMEVersion";

import CustomProgress from "./components/SuspenseFallback";

import {
  getStorageMode,
  setStorageMode,
} from "./components/services/SettingsService";
import BrowserTitle from "./components/BrowserTitle";

function App() {
  const [themeMode, setThemeMode] = useState(getStorageMode);
  const appliedTheme = createTheme(getTheme(themeMode));

  useEffect(() => {
    setStorageMode(themeMode);
  }, [themeMode]);

  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);

  const [transitionStage, setTransistionStage] = useState("slideIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransistionStage("slideOut");
    }
  }, [location, displayLocation]);

  const handleThemeModeChange = () => {
    setThemeMode((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <Suspense fallback={<CustomProgress themeMode={themeMode} />}>
        <CssBaseline />
        <BrowserTitle location={location} />
        <TitleBar
          themeMode={themeMode}
          handleThemeModeChange={handleThemeModeChange}
        />
        <div
          className={`${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "slideOut") {
              window.scrollTo(0, 0);
              setTransistionStage("slideIn");
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route
              path="*"
              element={<Home />}></Route>
            <Route
              path="/"
              element={<Home />}></Route>
            <Route
              path="meteorextinction"
              element={<MeteorExtinctionHome themeMode={themeMode} />}
            ></Route>
            <Route
              path="meteorextinction/download"
              element={<MeteorExtinctionDownload themeMode={themeMode} />}
            ></Route>
            <Route
              path="meteorextinction/download/changelog/alpha-0.1.0"
              element={<Alpha010Changelog />}
            ></Route>
            <Route
              path="meteorextinction/download/changelog/alpha-0.1.1"
              element={<Alpha011Changelog />}
            ></Route>
            <Route
              path="meteorextinction/download/changelog/alpha-0.1.2"
              element={<Alpha012Changelog />}
            ></Route>
            <Route
              path="woodengui"
              element={<WoodenGUIHome />}></Route>
            <Route
              path="woodengui/download"
              element={<WoodenGUIDownload />}
            ></Route>
            <Route
              path="contact"
              element={<Contact themeMode={themeMode} />}
            ></Route>
            <Route
              path="contact/issue-template"
              element={<IssueTemplate themeMode={themeMode} />}
            ></Route>
            <Route
              path="meteorextinction/download/update"
              element={<CheckMEVersion />}
            ></Route>
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
