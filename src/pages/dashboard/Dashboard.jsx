import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { DownloadOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { useTheme } from "@emotion/react";

function Dashboard({ setIsDashboard, isDashboard }) {
  const theme = useTheme();
  useEffect(
    function () {
      setIsDashboard(true);
      return function () {
        setIsDashboard(false);
      };
    },
    [setIsDashboard]
  );

  return (
    <Stack gap={1.5}>
      <Stack direction={"row"} alignItems={"center"}>
        <Box
          sx={{
            justifyContent: "start",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: theme.palette.info.light,
              fontSize: 23,
              fontWeight: 700,
            }}
          >
            DASHBOARD
          </Typography>
          <Typography fontWeight={500}>Welcome to your dashboard</Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "end",
            display: "flex",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Button
            sx={{
              fontSize: "12px",
              padding: "5px 8px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            {" "}
            <DownloadOutlined /> Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 isDashboard={isDashboard} />
      <Row3 />
    </Stack>
  );
}

export default Dashboard;
