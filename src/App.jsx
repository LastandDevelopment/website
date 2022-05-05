import React, { useState, useEffect, Suspense } from "react";

import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { isFirefox, isIE, isSafari, isMobile } from "react-device-detect";

import TitleBar from "./components/Titlebar";
import Home from "./components/Home";
import MeteorExtinctionHome from "./components/MeteorExtinctionHome";
import MeteorExtinctionDownload from "./components/MeteorExtinctionDownload";
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
import Changelog from "./components/Changelog";
import NotFound from "./components/404";

function App() {
  const [themeMode, setThemeMode] = useState(getStorageMode);
  const appliedTheme = createTheme(getTheme(themeMode));

  useEffect(() => {
    setStorageMode(themeMode);
  }, [themeMode]);

  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);

  function getTransitionClass() {
    if ((!isFirefox && !isIE && !isSafari) || isMobile) {
      return "slideIn";
    } else {
      return "slideInComp";
    }
  }
  const [transitionStage, setTransistionStage] = useState(getTransitionClass);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      if ((!isFirefox && !isIE && !isSafari) || isMobile) {
        setTransistionStage("slideOut");
      } else {
        setTransistionStage("slideOutComp");
      }
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
            if (
              transitionStage === "slideOut" ||
              transitionStage === "slideOutComp"
            ) {
              window.scrollTo(0, 0);
              setTransistionStage(getTransitionClass);
              setDisplayLocation(location);
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route
              path="*"
              element={<NotFound />}></Route>
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
              path="meteorextinction/download/changelog"
              element={
                <Changelog
                  displayLocation={displayLocation}
                  location={location}
                />
              }
            ></Route>
            <Route
              path="woodengui"
              element={<WoodenGUIHome themeMode={themeMode} />}
            ></Route>
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
              element={
                <CheckMEVersion
                  displayLocation={displayLocation}
                  location={location}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
