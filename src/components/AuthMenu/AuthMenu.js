import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
