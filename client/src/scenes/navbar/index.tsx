import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Moon icon
import LightModeIcon from '@mui/icons-material/LightMode'; // Sun icon

interface NavbarProps {
  mode: 'dark' | 'light'; // Assuming mode is either 'dark' or 'light'
  toggleMode: () => void;
}

const Navbar = ({ mode, toggleMode }: NavbarProps) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
  <FlexBetween mb="0.25rem" p="0.5rem 0rem" 
    color={palette.grey[300]}
  >
    {/* Left side */}
    <FlexBetween gap="0.75rem">
      <AccountBalanceIcon sx={{ fontSize: "28px", transition: 'color 0.4s' }} />
      <Typography variant="h4" fontSize="16px" >
        FinanceFlow AI
      </Typography>
    </FlexBetween>

    {/* Right side */}
    <FlexBetween gap="2rem">
      <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
        <Link
          to="/"
          onClick={() => setSelected("dashboard")}
          style={{
            color: selected === "dashboard" ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}
        >
          Dashboard
        </Link>
      </Box>
      <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
        <Link
          to="/predictions"
          onClick={() => setSelected("predictions")}
          style={{
            color: selected === "predictions" ? "inherit" : palette.grey[700],
            textDecoration: "inherit"
          }}
        >
          Predictions
        </Link>
      </Box>
      <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
        <IconButton onClick={toggleMode} color="inherit">
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </FlexBetween>
  </FlexBetween>
  );
}

export default Navbar