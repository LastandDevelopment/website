import React from "react";
import { LinearProgress, Box } from "@mui/material";

export default function CustomLinearProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <LinearProgress
        sx={{
          width: "50%",
        }}
        color="primary"
      />
    </Box>
  );
}
