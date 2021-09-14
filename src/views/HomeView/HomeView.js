import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
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
    </>
  );
};

export default HomeView;
