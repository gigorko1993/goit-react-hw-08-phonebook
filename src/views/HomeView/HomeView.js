import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const style = {
  container: {
    textAlign: "center",
  },
};
const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div style={style.container}>
      <h1>Your Personal pnonebook</h1>

      {!isLoggedIn ? (
        <p>
          Login / Register in our service, to have oportunity work with
          aplications
        </p>
      ) : (
        <p>
          Choose Contacts in navigation bar, to start worked with aplication
        </p>
      )}
    </div>
  );
};

export default HomeView;
