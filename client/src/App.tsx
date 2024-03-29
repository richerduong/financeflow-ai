import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getThemeSettings } from "./theme";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

function App() {
  // State to toggle between 'dark' and 'light'
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  // Dynamically create MUI theme
  const theme = useMemo(() => createTheme(getThemeSettings(mode)), [mode]);

  // Function to toggle the mode
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem" sx={{ backgroundColor: theme.palette.background.default, transition: 'background-color .4s'}}>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;