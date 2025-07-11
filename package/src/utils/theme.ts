import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5a00",
    },
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
