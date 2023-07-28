import { Box, Paper, Typography, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  return (
    <Box>
      <Paper
        sx={{
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt: "22px",
          pt: "37px",
          pb: "7px",
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ ml: "16px ", fontSize: "1.3em" }}>
          Gym
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mr: "33px",
            fontSize: "1.4em",
            fontWeight: 500,
            opacity: "0.8",
          }}
        >
          $100
        </Typography>

        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}
