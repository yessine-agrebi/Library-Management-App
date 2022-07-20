import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#8a1a50",
      contrastText: "#fff",
    },
  },
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const objetuser = encode({ "email": "password", email, password })
    const objetuser = {
      username: username,
      password: password,
    };
    console.log(objetuser);
    await dispatch(login(objetuser));
    navigate("/admin/dashboard");
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid 2px gray",
            padding: "40px",
            width: "500px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "neutral.main" }}>
            {" "}
            <PersonIcon />{" "}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label={<EmailIcon />}
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={<PasswordIcon />}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="neutral"
              sx={{ mt: 3, mb: 2 }}
              onClick={(event) => handleSubmit(event)}
            >
              Sign In
            </Button>
            <Grid container>
              <Link to="auth/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
