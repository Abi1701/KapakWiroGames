import * as React from "react";
import styles from "../styles/register.module.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function Register() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        // color: "white",
      },
      "&:hover fieldset": {
        border:"solid 2px",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
        color: "white",
      },
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.registerField}>
        <CssTextField
          sx={{mt:2,width:250,ml:2}}
          required
          label="Username"
          id="custom-css-outlined-input"
        />
                <CssTextField
          sx={{mt:2,width:250,ml:2}}
          required
          label="Email"
          id="custom-css-outlined-input"
        />
        <FormControl required sx={{ mt:2,width:250,ml:2 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /></FormControl>
          <FormControl required sx={{ mt:2,width:250,ml:2}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          /></FormControl>
        <button onClick={handleClick} className={styles.button}>
          <div></div>
          <span className={styles.text}>{isSent ? "Account" : "Register"}</span>
          <span className={styles.text}>
            {isSending ? "Processing ..." : isSent ? "Registered" : "Account"}
          </span>
        </button>
      </div>
    </div>
  );
}
