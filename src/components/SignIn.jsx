import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

export default function SignIn({ setComponent }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      mem_number: "",
      password: "",
    },
  });

  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000); // Redirect after 1 second
    }
  }, [redirect]);

  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };
  const handleSignUpClick = () => {
    setComponent("SignUp"); // Set the component to SignUp when clicked
  };
  const handleForgotPassClick = () => {
    setComponent("ForgotPass");
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      component={Paper}
      elevation={6}
      square
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="none"
    >
      <Box
        width="428px"
        height="450px"
        padding={4}
        pt={2}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        sx={{
          marginTop: "64px",
          marginBottom: "15px",
          marginLeft: "90px",
          marginRight: "56px",
          display: "flex",
          flexDirection: "column",
          //alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h4" my={2} fontWeight="bold">
          Sign In
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          Enter your details to continue.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            handleSubmit((data) => {
              setRedirect(true);
              console.log(data);
            })(e); // Pass the event object to handleSubmit
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            id="mem_number"
            label="Member Number"
            {...register("mem_number", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Only numbers are allowed",
              },
              minLength: {
                value: 10,
                message: "Required length is 10",
              },
              maxLength: {
                value: 10,
                message: "Required length is 10",
              },
            })}
            autoFocus
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {errors.mem_number?.message}
          </Typography>
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            {...register("password", {
              required: "Password is required",
              // maxLength: {
              //   value: 10,
              //   message: "Min length is 10",
              // },
              minLength: {
                value: 6,
                message: "minimum lenght is 6",
              },
            })}
            label="Password"
            type="password"
            id="password"
          />{" "}
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {errors.password?.message}
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item></Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleForgotPassClick}>
                {"Forgot Password"}
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              ...InputProps.style,
              mt: 3,
              mb: 2,
              height: "50px",
              backgroundColor: "#7338ac",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid item>
          <Link href="#" variant="body2" onClick={handleSignUpClick}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
