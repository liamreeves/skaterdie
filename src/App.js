import "./App.css";
import Dice from "./dice";
import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const { login, isPending } = useLogin();
  const { user } = useContext(AuthContext);
  console.log(user);

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
