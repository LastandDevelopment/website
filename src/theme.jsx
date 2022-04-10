const background = {
  light: { paper: "#ffffff", default: "#f3f3f3" },
  dark: { paper: "#121212", default: "#121212" },
};

const secondary = {
  light: "#fff",
  main: "#fff",
  dark: "#000",
  hover: "#808080",
  contrastText: "#000",
  contrastTextDark: "#fff",
};

const primary = {
  light: "#000",
  main: "#000",
  dark: "#000",
  contrastText: "#fff",
};

const font = "\"Roboto\", \"Helvetica\", \"Arial\", cursive";

const getTheme = (mode) => ({
  typography: {
    fontFamily: font,
    subtitle1: {
      fontSize: 14,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 16,
    },
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    h2: {
      fontSize: 25,
      fontWeight: 550,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 1000,
    },
    h6: {
      fontSize: 14,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 10,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 880,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        common: { black: "#000", white: "#fff" },
        background: {
          paper: background.light.paper,
          default: background.light.default,
        },
        primary: {
          light: primary.light,
          main: primary.main,
          dark: primary.dark,
          contrastText: primary.contrastText,
        },
        secondary: {
          light: secondary.light,
          main: secondary.main,
          dark: secondary.dark,
          hover: secondary.hover,
          contrastText: secondary.contrastText,
        },
        text: {
          primary: "rgba(0, 0, 0, 1)",
          secondary: "rgba(0, 0, 0, 1)",
          disabled: "rgba(100, 100, 100, 1)",
          hint: "rgba(55, 55, 55, 1)",
        },
        rowHover: "#1b1b1b",
      }
      : {
        // palette values for dark mode
        common: { black: "#000", white: "#fff" },
        background: {
          paper: background.dark.paper,
          default: background.dark.default,
        },
        primary: {
          light: primary.light,
          main: primary.main,
          dark: primary.dark,
          contrastText: primary.contrastText,
        },
        secondary: {
          light: secondary.light,
          main: secondary.main,
          dark: secondary.dark,
          hover: secondary.hover,
          contrastText: secondary.contrastText,
        },
        text: {
          primary: "rgba(255, 255, 255, 1)",
          secondary: "rgba(255, 255, 255, 1)",
          disabled: "rgba(155, 155, 155, 1)",
          hint: "rgba(200, 200, 200, 1)",
        },
        rowHover: "#1b1b1b",
      }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: font,
          fontSize: "20px",
          mode,
          ...(mode === "dark"
            ? {
              "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                background: "transparent",
                minHeight: 24,
              },
              "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                backgroundColor: "#00000000",
                border: "4px solid transparent",
                borderRadius: "24px",
                boxShadow: "8px 0px 0px 8px #ffffff inset",
              },
              "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                  {
                    backgroundColor: "#00000000",
                    border: "4px solid transparent",
                    borderRadius: "24px",
                    boxShadow: "8px 0px 0px 8px #c8c8c8 inset",
                  },
            }
            : {
              "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                background: "transparent",
                minHeight: 24,
              },
              "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                backgroundColor: "#00000000",
                border: "4px solid transparent",
                borderRadius: "24px",
                boxShadow: "8px 0px 0px 8px #242424 inset",
              },
              "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                  {
                    backgroundColor: "#00000000",
                    border: "4px solid transparent",
                    borderRadius: "24px",
                    boxShadow: "8px 0px 0px 8px #404040 inset",
                  },
            }),
        },
      },
    },
  },
});

export default getTheme;
