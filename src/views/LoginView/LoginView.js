import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import s from "./LoginView.module.css";

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
    if (
      !email ||
      e.target.email.value.trim() === "" ||
      !password ||
      e.target.password.trim() === ""
    ) {
      toast.warn("Enter email and password");
      return;
    }

    if (password.length < 8 || e.target.password.value.length < 8) {
      toast.warn("Password sjould be at least 8 characters");
      return;
    }
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          // id="standard-basic"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          // id="standard-basic"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={s.button}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}
