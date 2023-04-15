import { ColorModeContext, UseMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Topbar from "./Scenes/Global/Topbar";
// import SideBar from "./Scenes/Global/Sidebar";
import Dashboard from "./Scenes/dashboard";
// import Team from "./Scenes/team";
// import Invoice from "./Scenes/invoice";
// import Contact from "./Scenes/contact";
// import Bar from "./Scenes/bar";
// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import FAQ from "./Scenes/faq";
// import Geography from "./Scenes/geography";
// import Calender from"./Scenes/calender";

function App() {

  const [theme, colormode] = UseMode();


  return (
    <ColorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/invoice" element={<Invoice />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calender" element={<Calender />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
