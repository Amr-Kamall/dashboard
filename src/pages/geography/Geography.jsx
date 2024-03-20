import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Geo from "./Geo";

function Geography({ isDashboard }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "75vh",
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: "5px",
        width: "92%",
        margin: "auto",
      }}
    >
      <Geo isDashboard={isDashboard} />
    </Box>
  );
}

export default Geography;
