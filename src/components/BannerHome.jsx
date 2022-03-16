import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import LastandDevelopmentLogo from "./icons/LastandDevelopmentLogo.svg";
import { AppBar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(12),
  "@media all": {
    minHeight: 128,
  },
}));

export default function BannerHome() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 40 }}>
      <AppBar
        color="primary"
        enableColorOnDark
        elevation={0}
        position="absolute"
      >
        <StyledToolbar className="mui-fixed">
          <img
            src={LastandDevelopmentLogo}
            alt="Lastand Development"
            style={{ height: 120 }}
            component="div"
            sx={{ flexGrow: 1 }}
          />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
