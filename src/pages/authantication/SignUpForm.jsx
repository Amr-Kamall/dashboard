import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function SignUpForm({ isSignIn }) {
  const navigate = useNavigate();
  console.log(isSignIn);
  const [loading, setLoading] = useState(false);
  // reg expression
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      setLoading(true);
      await signUp(data);
      handleClick();
      if (isSignIn) {
        navigate("/");
      }
      reset();
    } catch (error) {
      console.log("error in sign up yalaa");
    } finally {
      setLoading(false);
    }
  }

  // select;
  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  // snackbar
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack
      sx={{
        height: isSignIn ? "100vh" : "72vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isSignIn && (
        <Typography
          variant="h1"
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#8995aa",
          }}
        >
          Sign Up
        </Typography>
      )}
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          padding: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            // background: "orangered",
          }}
        >
          <TextField
            disabled={loading}
            sx={{ width: "50%" }}
            label="First Name"
            variant="filled"
            error={Boolean(errors.firstName)}
            {...register("firstName", { required: true, minLength: 3 })}
            helperText={
              errors.firstName ? "This Field Is Required & max 5 character" : ""
            }
          />
          <TextField
            disabled={loading}
            sx={{ width: "50%" }}
            label="Last Name"
            variant="filled"
            error={Boolean(errors.lastName)}
            {...register("lastName", { required: true, minLength: 3 })}
            helperText={
              errors.lastName ? "This Field Is Required & max 5 character" : ""
            }
          />
        </Box>
        <TextField
          disabled={loading}
          label="Email"
          variant="filled"
          error={Boolean(errors.email)}
          {...register("email", {
            required: true,
            pattern: regEmail,
          })}
          helperText={
            errors.email ? "Please Provide a Valid Email Address" : ""
          }
        />
        <TextField
          disabled={loading}
          label="Password"
          variant="filled"
          error={Boolean(errors.password)}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
            },
          })}
          helperText={
            errors.password ? "Password needs a minimum of 8 character" : ""
          }
        />
        <TextField
          disabled={loading}
          label="Repeat Password"
          variant="filled"
          error={Boolean(errors.passwordConfirm)}
          {...register("passwordConfirm", {
            required: true,
            validate: (value) => value === getValues().password || "",
          })}
          helperText={errors.passwordConfirm ? "password need to match" : ""}
        />

        {/* menu */}

        <TextField
          disabled={loading}
          id="standard-select-currency-native"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "end" }}>
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>
          {isSignIn ? (
            <Button variant="outlined" onClick={() => navigate("/login")}>
              sign in
            </Button>
          ) : (
            ""
          )}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%", color: "#fff" }}
            >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Stack>
  );
}

export default SignUpForm;
