import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";
import authSelectors from "../../redux/auth/auth-selectors";

export default function NavigationBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
        {isLoggedIn && (
          <li className={s.NavItem}>
            <NavLink
              className={s.NavLink}
              activeClassName={s.NavLinkActive}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
}
