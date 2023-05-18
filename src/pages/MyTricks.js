import TrickList from "../components/TrickList";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import getUserTricks from "../hooks/getUserTricks";

export default function MyTricks() {
  const [userTricks, setUserTricks] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // This effect will only run when the user context changes
    if (user) {
      getUserTricks(user)
        .then((tricks) => {
          setUserTricks(tricks);
        })
        .catch((error) => console.error(error));
    } else {
      setUserTricks([]);
    }
  }, [user, userTricks]);

  return <TrickList user={user} tricks={userTricks} />;
}
