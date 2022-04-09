import React from "react";
import { CircularProgress, Box } from "@mui/material";

export default function CustomProgress(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress
        color={props.themeMode === "dark" ? "secondary" : "primary"}
        size="60px"
        sx={{ strokeLinecap: "round" }}
      />
    </Box>
  );
}
