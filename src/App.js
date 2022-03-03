import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TitleBar from "./components/Titlebar";
import Home from "./components/Home";
import MeteorExtinctionHome from "./components/MeteorExtinctionHome";
import MeteorExtinctionDownload from "./components/MeteorExtinctionDownload";

function App() {
  const activeTheme = "dark";
  const appliedTheme = createTheme(getTheme(activeTheme));

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">
        <TitleBar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}></Route>
            <Route
              path="meteorextinction"
              element={<MeteorExtinctionHome />}
            ></Route>
            <Route
              path="meteorextinction/download"
              element={<MeteorExtinctionDownload />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
