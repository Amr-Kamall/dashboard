import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import UpdateUserDataForm from "../authantication/UpdateUserDataForm";
import UpdatePassword from "../authantication/UpdatePassword";

function Account() {
  return (
    <Stack padding={5} gap={4}>
      <Box>
        <Typography variant="h5" fontWeight={500}>
          Update your account{" "}
        </Typography>
      </Box>
      <Box>
        <Typography fontSize={20} mb={1}>
          Update user data
        </Typography>
        <UpdateUserDataForm />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <UpdatePassword />
      </Box>
    </Stack>
  );
}

export default Account;
