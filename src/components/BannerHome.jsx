import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import styles from "./BannerHome.module.css";
import { AppBar } from "@mui/material";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(12),
}));

export default function BannerHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="primary"
        enableColorOnDark
        elevation={0}
        position="relative"
      >
        <StyledToolbar
          className="mui-fixed"
          sx={{ justifyContent: "center" }}>
          <img
            className={styles.Logo}
            src={LastandDevelopmentLogo}
            alt="Lastand Development"
            component="div"
            sx={{ flexGrow: 1 }}
          />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
