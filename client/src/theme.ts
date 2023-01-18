import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#17202e",
      light: "#d8e1e9",
    },
    secondary: {
      main: "#0abeff",
    },

    error: {
      main: "#rttr",
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
  },
});
