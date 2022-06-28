import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import WorkIcon from "@material-ui/icons/Work";
import Lock from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fname', data.fname);
    formData.append('lname', data.lname);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('address', data.address);
    console.log(data);
   const res= await axios.post("https://abcd378.herokuapp.com/register",formData)
   console.log(res)
   if(res.data.responseMessage==="success"){
    toast.success("Register Sucessfully",{autoClose:2000})
    setTimeout(()=>{navigate("/login")},2000)
   } else{
    toast.error("Error in Registration, Please try again",{autoClose:2000})
   }
  };

  return (
    <Container component="main" maxWidth="md">
        <ToastContainer />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <PersonOutLineIcon />
                </Avatar>
                <TextField
                  {...register("fname")}
                  autoComplete="fname"
                  name="fname"
                  // variant="outlined"
                  required
                  fullWidth
                  id="fname"
                  label="first name"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <PersonOutLineIcon />
                </Avatar>
                <TextField
                  {...register("lname")}
                  autoComplete="lname"
                  name="lname"
                  // variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  label="last name"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <EmailIcon />
                </Avatar>
                <TextField
                  {...register("email")}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
                <TextField
                  {...register("phone")}
                  required
                  fullWidth
                  id="phone"
                  label="phone"
                  name="phone"
                  autoComplete="phone"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <WorkIcon />
                </Avatar>
                <TextField
                  {...register("address")}
                  required
                  fullWidth
                  id="address"
                  label="address"
                  name="address"
                  autoComplete="work"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <Lock />
                </Avatar>
                <TextField
                  {...register("password", {
                   
                  })}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{ marginLeft: 6 }}
                />
              </Box>
              {errors.password ? (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              ) : (
                ""
              )}
            </Grid>
            {/* <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Avatar>
                  <Lock />
                </Avatar>
                <TextField
                  {...register("cpassword", {
                    pattern: {
                      value: /[a-zA-Z]+/g,
                      message: "confirm password should contains letter only",
                    },
                    validate: (value) =>
                      value === watch("password") || "Password should match",
                  })}
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="cpassword"
                  autoComplete="confirm-password"
                  style={{ marginLeft: 6 }}
                />
              </Box>
            </Grid> */}
            {errors.cpassword ? (
              <p style={{ color: "red" }}>{errors.cpassword.message}</p>
            ) : (
              ""
            )}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
