import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import API_CLIENT from "../../../shared/services/api_client";

const Register = () => {
  // const fname = useRef("");
  // const lname = useRef("");
  // const email = useRef("");
  const uid = useRef("");
  const pwd = useRef("");
  const [message, setMessage] = useState("");

  const doRegister = async () => {
    console.log(
      // "First Name: ",
      // fname.current.value,
      // "Last Name: ",
      // lname.current.value,
      // "Email: ",
      // email.current.value,
      "Userid: ",
      uid.current.value,
      "Password: ",
      pwd.current.value
    );

    const result = await API_CLIENT.post(process.env.REACT_APP_REGISTER, {
      // first_name: fname.current.value,
      // last_name: lname.current.value,
      // email: email.current.value,
      userid: uid.current.value,
      password: pwd.current.value,
    });
    console.log("Result ", result);
    setMessage(result.data.message);
  };

  return (
    <>
      <Container fixed>
        <h2>{message}</h2>
        <Box sx={{ bgcolor: "white", height: "50vh" }}>
          {/* <TextField
            inputRef={fname}
            id="outlined-basic-1"
            label="First Name"
            variant="outlined"
          />
          <TextField
            inputRef={lname}
            id="outlined-basic-2"
            label="Last Name"
            variant="outlined"
          />
          <br />
          <TextField
            inputRef={email}
            id="outlined-basic-3"
            label="Enter Your Email"
            type="email"
            variant="outlined"
          /> */}
          <br />
          <TextField
            inputRef={uid}
            id="outlined-basic"
            label="Userid"
            variant="outlined"
          />
          <br />
          <TextField
            inputRef={pwd}
            id="outlined-password-input"
            label="Enter New Password"
            type="password"
            variant="outlined"
          />
          <br />
          <br />

          <Button onClick={doRegister} variant="contained">
            Register
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Register;
