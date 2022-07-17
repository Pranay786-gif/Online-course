import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonOutLineIcon from "@material-ui/icons/PersonOutline"
import Lock from "@material-ui/icons/Lock"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {useForm} from "react-hook-form"
import axios from "axios";
import Navbar from "./Navbar";
 
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://image.shutterstock.com/z/stock-photo-business-technology-internet-and-networking-concept-young-businesswoman-working-on-his-laptop-in-1097989835.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Login =  () => {
    const navigate = useNavigate()
  const classes = useStyles();
  const{handleSubmit,register} =useForm()
const onSubmit = async (data,e)=>{
  e.preventDefault();
  console.log(data)
  const formData = new FormData();

formData.append('username', data.email);
formData.append('password', data.password);
try{
 const res= await axios.post("https://abcd378.herokuapp.com/login",formData)
if(res.data.responseMessage==="success"){
  localStorage.setItem("user_email",res.data.userId)
    toast.success("Login Successfully",{autoClose:4000})
    localStorage.setItem("key","Pranay")
    setTimeout(()=>{window.location.replace("http://localhost:3001/dashboard")},2000)
} else{
    toast.error("Incorrect Username or Password",{autoClose:2000})
}
} catch{
    toast.error("Something went wrong, please try again",{autoClose:2000})
}
}
  return (
    <Grid container component="main" className={classes.root}>
      <Navbar />
        <ToastContainer />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Avatar >
                <PersonOutLineIcon />
                </Avatar>
            <TextField
           {...register("email")}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="on"
              style={{marginLeft:6}}
            />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Avatar >
                <Lock />
                </Avatar>
            <TextField
               {...register("password")}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              style={{marginLeft:6}}

            />
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
     
    </Grid>
  );
};

export default Login;
