import React, { useState, useEffect, Suspense } from "react";

import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useLocation } from "react-router-dom";

import TitleBar from "./components/Titlebar";

import CustomProgress from "./components/SuspenseFallback";

import {
  getStorageMode,
  setStorageMode,
} from "./components/services/SettingsService";
import BrowserTitle from "./components/BrowserTitle";

import AllRoutes from "./Routes";

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
    if (location.pathname !== locationBefore.pathname) {
      if (location.pathname === "/") {
        if (locationBefore.pathname.startsWith("/meteorextinction")) {
          setTransitionType("fromMEToHome");
        } else if (locationBefore.pathname.startsWith("/woodengui")) {
          setTransitionType("fromWGToHome");
        } else if (locationBefore.pathname.startsWith("/contact")) {
          setTransitionType("fromContactToHome");
        } else {
          setTransitionType("from404ToHome");
        }
      } else {
        if (location.pathname.startsWith("/meteorextinction")) {
          if (
            locationBefore.pathname.startsWith(
              "/meteorextinction/download/changelog"
            )
          ) {
            setTransitionType("fromMEToHome");
          } else if (
            locationBefore.pathname.startsWith("/meteorextinction/download")
          ) {
            if (
              location.pathname.startsWith(
                "/meteorextinction/download/changelog"
              )
            ) {
              setTransitionType("toME");
            } else if (location.pathname.startsWith("/meteorextinction")) {
              setTransitionType("fromMEToHome");
            }
          } else {
            setTransitionType("toME");
          }
        } else if (location.pathname.startsWith("/woodengui")) {
          if (locationBefore.pathname.startsWith("/woodengui/download")) {
            setTransitionType("fromWGToHome");
          } else {
            setTransitionType("toWG");
          }
        } else if (location.pathname.startsWith("/contact")) {
          if (locationBefore.pathname.startsWith("/contact/issue-template")) {
            setTransitionType("fromContactToHome");
          } else {
            setTransitionType("toContact");
          }
        } else {
          setTransitionType("to404");
        }
      }
      setLocationBefore(location);
      setLocationForTransition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--window-height",
      height + "px"
    );
  }, [height]);

  function setLocationForTransition() {
    React.startTransition(() => {
      setTransitionLocation(location);
    });
  }

  return (
    <ThemeProvider theme={appliedTheme}>
      <Suspense fallback={<CustomProgress themeMode={themeMode} />}>
        <CssBaseline />
        <BrowserTitle location={location} />
        <TitleBar
          themeMode={themeMode}
          handleThemeModeChange={handleThemeModeChange}
        />
        <AllRoutes
          themeMode={themeMode}
          displayLocation={displayLocation}
          location={location}
          transitionLocation={transitionLocation}
          transitionType={transitionType}
          setDisplayLocation={setDisplayLocation}
        />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
