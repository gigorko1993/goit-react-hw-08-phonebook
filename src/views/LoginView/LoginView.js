import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";

// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//       // display: "flex",
//       // alignItems: "center",
//     },
//   },
// }));

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="standard-basic"
          label="Email"
          // className={s.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          // className={s.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {/* <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label> */}
        <Button variant="contained" color="primary" type="submit">
          Log In
        </Button>
        {/* <button variant="outline-secondary" type="submit">
          Log In
        </button> */}
      </form>
    </div>
  );
}
