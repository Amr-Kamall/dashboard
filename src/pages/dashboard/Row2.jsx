import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Line from "../lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import TypographyTitle from "./TypographyTitle";

const recentData = [
  {
    userName: "johndoe",
    password: "01e4dsaewf",
    date: "2021-09-01",
    salary: "$43.91",
  },
  {
    userName: "sheko",
    password: "0315dsaaef",
    date: "2022-04-01",
    salary: "$133.45",
  },
  {
    userName: "kamolamy",
    password: "01e4dsaef",
    date: "2021-09-01",
    salary: "$43.95",
  },
  {
    userName: "goodmanave",
    password: "51034szvfew",
    date: "2022-11-05",
    salary: "$200.95",
  },
  {
    userName: "stevebower",
    password: "0a123sb",
    date: "2022-11-02",
    salary: "$13.55",
  },
  {
    userName: "aberdohnny",
    password: "01e4dsa",
    date: "2021-09-01",
    salary: "$43.95",
  },
  {
    userName: "wootzifer",
    password: "120s51a",
    date: "2019-04-15",
    salary: "$24.20",
  },
  {
    userName: "sheko",
    password: "0315dsaa",
    date: "2022-04-01",
    salary: "$133.49",
  },
];

function Row2({ isDashboard }) {
  //   const matches = useMediaQuery("(min-width:1300px)");
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
      <Paper>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          padding={"10px 20px"}
        >
          <Box>
            <TypographyTitle>Revenue Generated</TypographyTitle>
            <Typography fontSize={14} fontWeight={500} mt={1}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlined sx={{ fontSize: "27px" }} />
            </IconButton>
          </Box>
        </Stack>
        <Box
          sx={{
            height: `${isDashboard ? "40vh" : "75vh"}`,
            width: "900px",
          }}
        >
          <Line />
        </Box>
      </Paper>
      <Stack
        gap={1}
        flexGrow={1}
        overflow={"scroll"}
        sx={{ overflowX: "hidden" }}
        height={380}
      >
        <Paper sx={{ padding: "9px 10px" }}>
          <TypographyTitle>Recent Transactions</TypographyTitle>
        </Paper>
        {recentData.map((recent) => (
          <Paper
            key={recent.password}
            sx={{
              padding: "10px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                {recent.password}
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
                {recent.userName}
              </Typography>
            </Box>
            <Box>
              {" "}
              <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                {recent.date}
              </Typography>
            </Box>
            <Box
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                background: "#f44336",
                padding: "6px 15px",
                borderRadius: "10px",
              }}
            >
              <Typography>{recent.salary}</Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}

export default Row2;
