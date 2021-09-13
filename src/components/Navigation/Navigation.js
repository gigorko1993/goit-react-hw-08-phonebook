import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
// add selector of login

export default function NavigationBar() {
  return (
    <header className={s.Header}>
      <ul className={s.NavList}>
        <li className={s.NavItem}>
          <NavLink
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        {/* render if login  */}
        <li className={s.NavItem}>
          <NavLink
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
            to="/contacts"
          >
            Contacts
          </NavLink>
          {/* render if login  */}
        </li>
      </ul>
    </header>
  );
}
