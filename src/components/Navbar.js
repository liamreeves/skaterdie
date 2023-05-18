import { useLogin } from "./../hooks/useLogin";
import { AuthContext } from "./../contexts/AuthContext";
import { useContext } from "react";
import DropdownMenu from "./../components/DropdownMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { login, isPending } = useLogin();
  const { user } = useContext(AuthContext);

  return (
    <header className="flex justify-around">
      <div>
        {!user ? (
          ""
        ) : (
          <DropdownMenu
          />
        )}
      </div>

      {!user ? (
        <button className="btn" onClick={login}>
          {isPending ? "Loading..." : "Login With Google"}
        </button>
      ) : (
        <div className="flex w-1/2 justify-between">
          {`Hey ${user.displayName}`}
          <div className="flex w-2/3 justify-between">
            <Link to="/">Dice</Link>
            <Link to="/add">Add Trick</Link>
            <Link to="/tricks">My Tricks</Link>
          </div>
        </div>
      )}
    </header>
  );
}
