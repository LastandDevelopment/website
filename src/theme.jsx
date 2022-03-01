const background = {
    light: { paper: "#ffffff", default: "#ffffff" },
    dark: { paper: "#121212", default: "#121212" },
  };
  
  const secondary = {
    light: "#fff",
    main: "#fff",
    dark: "#fff",
    contrastText: "#000",
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
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
          },
          rowHover: "#e9e9e9",
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
            secondary: "rgba(207, 207, 207, 1)",
            disabled: "rgba(155, 155, 155, 1)",
            hint: "rgba(255, 255, 255, 1)",
          },
          rowHover: "#1b1b1b",
        }),
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontSize: "20px",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: font,
            fontSize: "20px",
            a: {
              color: primary.main,
            },
            "a:hover": {
              color: primary.light,
            },
            mode,
            ...(mode === "dark"
              ? {
                scrollbarColor: `${secondary.dark} ${background.dark.default}`,
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                  backgroundColor: background.dark.default,
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                  borderRadius: 8,
                  backgroundColor: secondary.dark,
                  minHeight: 24,
                  border: `3px solid ${background.dark.default}`,
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
                  backgroundColor: background.dark.default,
                },
              }
              : {
                scrollbarColor: `${primary.dark} ${background.light.default}`,
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
                  backgroundColor: background.light.default,
                },
              }),
          },
        },
      },
    },
  });
  
  export default getTheme;