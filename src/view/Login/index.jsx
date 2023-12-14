// LoginForm.jsx
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.auth.loggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    if(isAuthenticated){
      navigate('/')
    }
  },[isAuthenticated])

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      dispatch(actions.isLoggedIn(true))
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Grid
      container
      className="flex-center"
      sx={{ flexDirection: "column", height: "90vh", gap: 2, padding: 4 }}
    >
      <Typography className="title" variant="h3" sx={{ textAlign: "start" }}>
        Sign In
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          style={{ backgroundColor: "#ffffff" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          style={{ backgroundColor: "#ffffff" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{
            marginTop: "20px",
            padding: "10px 0",
            backgroundColor: "#4a4a4a",
          }}
        >
          Login
        </Button>
      </form>
      <Typography>
        Do not have an account?{" "}
        <span onClick={() => navigate("/cart")} style={{ color: "purple", cursor: "pointer" }}>
          Sign Up
        </span>{" "}
        here
      </Typography>
    </Grid>
  );
};

export default Login;
