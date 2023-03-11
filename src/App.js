import "./App.css";
import Dice from "./dice";
import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import DropdownMenu from "./components/DropdownMenu";
import setUserTricks from "./hooks/setUserTricks";

function App() {
  const { login, isPending } = useLogin();
  const { user } = useContext(AuthContext);
  
  setUserTricks(user?.uid, {
    Kickflip: {
      landed: true,
      wip: true,
      variations: { 0: true, 1: false, 2: false, 3: true },
    },
  });

  return (
    <div className="App">
      <header>
        {!user ? "" : <DropdownMenu />}

        {!user ? (
          <button className="btn btn-dark" onClick={login}>
            {isPending ? "Loading..." : "Login With Google"}
          </button>
        ) : (
          `Hey ${user.displayName}`
        )}
      </header>
      <Dice />
    </div>
  );
}

export default App;
