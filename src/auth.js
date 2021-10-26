import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btnStatusChange, inputName, inputPassword } from "./redux/actions";
import { useHistory } from "react-router-dom";

const AuthorizationPage = () => {
  const data = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let history = useHistory();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };

  const btnStyle = { margin: "20px 0" };

  const nameChange = (event) => {
    dispatch(inputName(event.target.value));
    if (data.profilName === event.target.value) {
      if (data.profilPassword === data.inputPassword) {
        dispatch(btnStatusChange(false));
      } else {
        dispatch(btnStatusChange(true));
      }
    } else {
      dispatch(btnStatusChange(true));
    }
  };

  const passwordChange = (event) => {
    dispatch(inputPassword(event.target.value));
    console.log("event: ", event.target.value);
    if (data.profilName === data.inputName) {
      if (data.profilPassword === event.target.value) {
        dispatch(btnStatusChange(false));
      } else {
        dispatch(btnStatusChange(true));
      }
    } else {
      dispatch(btnStatusChange(true));
    }
  };

  const btnAuthorized = () => {    
    history.push("./profile");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Авторизация</h1>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          onChange={nameChange}
          value={data.inputName}
          style={btnStyle}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={passwordChange}
          value={data.inputPassword}
          fullWidth
          required
        />
        <Button
          style={btnStyle}
          variant="contained"
          type="submit"
          color="success"
          fullWidth
          disabled={data.btnAuth}
          onClick={btnAuthorized}
        >
          Войти
        </Button>
      </Paper>
    </Grid>
  );
};

export default AuthorizationPage;
