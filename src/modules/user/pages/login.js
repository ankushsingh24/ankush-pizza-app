import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import API_CLIENT from "../../../shared/services/api_client";

const Login = () => {
  const uid = useRef("");
  const pwd = useRef("");
  const [message, setMessage] = useState("");

  const doLogin = async () => {
    console.log("Userid ", uid.current.value, "Pwd ", pwd.current.value);
    const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN, {
      userid: uid.current.value,
      password: pwd.current.value,
    });
    setMessage(result.data.message);
  };

  return (
    <>
      <Container fixed>
        <h2>{message}</h2>
        <Box sx={{ bgcolor: "white", height: "50vh" }}>
          <TextField
            inputRef={uid}
            id="outlined-basic"
            label="Userid"
            variant="outlined"
          />
          <TextField
            inputRef={pwd}
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
          />
          <br />
          <br />
          <Button onClick={doLogin} variant="contained">
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
