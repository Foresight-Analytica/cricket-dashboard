import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Containers/global/TopBar";
import SideBar from "./Containers/global/SideBar";
import Dashboard from "./Containers/dashboard/Dashboard";
import Team from "./Containers/team";
import Invoices from "./Containers/invoices";
import Contacts from "./Containers/contacts";
import Bar from "./Containers/bar";
import Form from "./Containers/form";
import Line from "./Containers/line";
import Pie from "./Containers/pie";
import FAQ from "./Containers/faq/index";
import Geography from "./Containers/geography/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Containers/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
