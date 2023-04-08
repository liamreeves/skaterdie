import "./App.css";
import Dice from "./components/Dice";
import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const { login, isPending } = useLogin();
  const { user } = useContext(AuthContext);

  const [darkMode, handleDarkMode] = useState(true)

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`} style={{height: "100%"}}>
      <header>
        {!user ? "" : <DropdownMenu darkMode={darkMode} handleDarkMode={() => handleDarkMode(!darkMode)} />}

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
