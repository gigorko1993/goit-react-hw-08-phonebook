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
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        login
      </NavLink>
    </div>
  );
}
