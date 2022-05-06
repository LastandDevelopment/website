import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  Logo: {
    "@media screen and (min-width: 450px)": {
      height: "120px",
      width: "307.34px",
    },
    "@media screen and (max-width: 450px)": {
      height: "27vw",
      width: "69.15vw",
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(12),
}));

export default function BannerHome() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 40 }}>
      <AppBar
        color="primary"
        enableColorOnDark
        elevation={0}
        position="absolute"
      >
        <StyledToolbar
          className="mui-fixed"
          sx={{ justifyContent: "center" }}>
          <img
            className={classes.Logo}
            src="/LastandDevelopmentLogo.svg"
            alt="Lastand Development"
            component="div"
            sx={{ flexGrow: 1 }}
          />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
