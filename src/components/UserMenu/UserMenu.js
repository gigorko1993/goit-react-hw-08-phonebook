import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className="user-menu">
      <div className="">
        <span className="user-name">{name}</span>
      </div>
      <button
        type="button"
        className="logout-btn"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
