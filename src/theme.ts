import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#6a665a",
      },
      secondary: {
        main: "#e19f05",
      },
    },
    typography: {
        fontFamily: "Helvetica Neue",
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;