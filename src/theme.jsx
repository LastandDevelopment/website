const background = {
  light: { paper: "#121212", default: "#121212" },
  dark: { paper: "#121212", default: "#121212" },
};

const secondary = {
  light: "#000",
  main: "#000",
  dark: "#000",
  contrastText: "#fff",
};

const primary = {
  light: "#fff",
  main: "#fff",
  dark: "#fff",
  contrastText: "#000",
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
          contrastText: secondary.contrastText,
        },
        text: {
          primary: "rgba(255, 255, 255, 1)",
          secondary: "rgba(255, 255, 255, 1)",
          disabled: "rgba(155, 155, 155, 1)",
          hint: "rgba(200, 200, 200, 1)",
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
          a: {
            color: primary.main,
          },
          "a:hover": {
            color: primary.main,
          },
          mode,
          ...(mode === "dark"
            ? {
              scrollbarColor: `${primary.dark} ${background.dark.default}`,
              "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                backgroundColor: background.dark.default,
              },
              "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                borderRadius: 8,
                backgroundColor: primary.dark,
                minHeight: 24,
                border: `3px solid ${background.dark.default}`,
              },
              "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                  {
                    backgroundColor: primary.main,
                  },
              "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                  {
                    backgroundColor: primary.main,
                  },
              "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                  {
                    backgroundColor: primary.main,
                  },
              "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                backgroundColor: background.dark.default,
              },
            }
            : {
              scrollbarColor: `${secondary.dark} ${background.light.default}`,
              "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                backgroundColor: background.light.default,
              },
              "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                borderRadius: 8,
                backgroundColor: "#dadce0",
                minHeight: 24,
                border: `3px solid ${background.light.default}`,
              },
              "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
                  {
                    backgroundColor: secondary.main,
                  },
              "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
                  {
                    backgroundColor: secondary.main,
                  },
              "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
                  {
                    backgroundColor: secondary.main,
                  },
              "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                backgroundColor: background.light.default,
              },
            }),
        },
      },
    },
  },
});

export default getTheme;
