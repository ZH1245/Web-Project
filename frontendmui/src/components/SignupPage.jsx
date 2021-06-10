import {
  Button,
  Container,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MyLayout from "../layout/MyLayout";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
function SignupPage() {
  const [progress, setprogress] = useState(0);
  const [inputval, setinputval] = useState();
  const handleChange = (e) => {
    setinputval(e.target.value);
    if (inputval > 0) {
      setprogress(33.33);
    }
  };
  const classes = useStyles();
  useEffect(() => {
    console.log(inputval);
  }, [inputval]);
  return (
    <React.Fragment>
      <MyLayout />

      <form autoComplete>
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h5" color="secondary">
            Enter Details to Proceed
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nameinput"
            variant="outlined"
            label="Full Name"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            variant="outlined"
            label="UserName"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            variant="outlined"
            label="Password"
          />
          <LinearProgress variant="determinate" value={progress} />
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Container>
      </form>
    </React.Fragment>
  );
}

export default SignupPage;
