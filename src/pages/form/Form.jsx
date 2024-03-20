import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  // reg expression
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regNumber = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleClick();
    console.log(data);
    reset();
  };

  // select
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
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
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
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        helperText={errors.email ? "Please Provide a Valid Email Address" : ""}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.phone)}
        {...register("phone", {
          required: true,
          pattern: regNumber,
        })}
        helperText={errors.phone ? "Please Provide a Valid Phone Number" : ""}
      />
      <TextField
        label="Address 1"
        variant="filled"
        // {...register("address", {
        //   required: true,
        // })}
        // helperText={errors.address ? "Please Provide a Valid address" : ""}
      />
      <TextField label="Address 2" variant="filled" />

      {/* menu */}

      <TextField
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
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
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
  );
}

export default Form;
