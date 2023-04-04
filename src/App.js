import { ColorModeContext, UseMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Scenes/Global/Topbar"


function App() {

  const [theme, colormode] = UseMode();


  return (
    <ColorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
         <main className="content">
          <Topbar />
         </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
