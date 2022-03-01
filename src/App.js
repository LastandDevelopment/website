import getTheme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import TitleBar from './components/Titlebar';
import BannerHome from './components/BannerHome';

function App() {

  const activeTheme = 'dark';
  const appliedTheme = createTheme(getTheme(activeTheme));

  return (
    <ThemeProvider theme={appliedTheme}>
      <div className="App">
        <BannerHome />
        <TitleBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
