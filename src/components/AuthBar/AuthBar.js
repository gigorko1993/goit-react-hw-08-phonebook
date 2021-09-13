import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./AuthBar.module.css";

export default function AuthBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.Header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
}
