import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";

import Fab from "@material-ui/core/Fab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.thumb}>
      <div className={s.titleThumb}>
        <AccountCircleIcon />
        <span className={s.title}>{name}</span>
      </div>
      <Fab
        variant="extended"
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <ExitToAppIcon />
        Log Out
      </Fab>
    </div>
  );
}
