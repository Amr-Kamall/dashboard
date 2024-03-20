import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import SmallChart from "./smallChart/SmallChart";
import { useTheme } from "@emotion/react";

function Card({ icon, info, num, increase, scheme }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        minWidth: "333px",
        padding: 1.5,
        flexGrow: 1,
      }}
    >
      <Stack direction={"column"} gap={1}>
        <Typography color={theme.palette.secondary.main}>{icon}</Typography>
        <Typography sx={{ fontSize: "13px", fontWeight: "400" }}>
          {num}
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
          {info}
        </Typography>
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box height="75px" width={"75px"}>
          <SmallChart scheme={scheme} />
        </Box>
        <p>{increase}</p>
      </Stack>
    </Paper>
  );
}

export default Card;
