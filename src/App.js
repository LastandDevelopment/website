import "./App.css";
import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import TitleBar from './components/Titlebar';
import BannerHome from './components/BannerHome';
import Home from "./components/Home";

function App() {

  const activeTheme = 'dark';
  const appliedTheme = createTheme(getTheme(activeTheme));

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">
        <BannerHome />
        <TitleBar />
        <Container className="container">
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
