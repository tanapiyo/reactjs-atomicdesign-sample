import { createMuiTheme } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#42a5f5",
      light: "#e3f2fd" //for background
    },
    secondary: {
      light: "#f5f5f5", //search inputの背景とか
      main: "#9e9e9e",
      dark: "#616161" //copyrightとか
    }
  },
  typography: {
    fontFamily: [
      "Arial",
      "ヒラギノ角ゴ Pro W3",
      "Hiragino Kaku Gothic Pro",
      "Osaka",
      "メイリオ"
    ].join(","),
    fontSize: 12,
    subtitle1: {
      fontSize: 12
    },
    h3: {
      fontSize: 18,
      fontWeight: 700
    },
    h4: {
      fontSize: 14,
      fontWeight: 700
    },
    button: {
      fontSize: 14,
      fontWeight: 500
    },
    body2: {
      fontSize: 12,
      color: "#616161"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: 15,
        "&:hover": {
          backgroundColor: "#e3f2fd",
          color: "#42a5f5"
        }
      }
    }
  }
});

// how to use
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import theme from 'xx/xx/theme';
// <MuiThemeProvider theme={theme}></MuiThemeProvider>
//<Typography variant="h3">Responsive h3</Typography>

//padding: theme.spacing(1, 2),
