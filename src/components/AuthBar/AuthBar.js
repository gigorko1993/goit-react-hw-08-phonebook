import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../AuthMenu";
import AuthMenu from "../AuthMenu";
import authSelectors from "../../redux/auth/auth-selectors";

export default function AuthBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
}
