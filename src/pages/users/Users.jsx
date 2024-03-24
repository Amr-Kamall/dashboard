import React from "react";
import SignUpForm from "../authantication/SignUpForm";
import { Typography } from "@mui/material";

function Users() {
  return (
    <>
      <Typography variant="h1" fontSize={27} fontWeight={500} mb={3}>
        create a new user
      </Typography>
      <SignUpForm />
    </>
  );
}

export default Users;
